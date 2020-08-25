import React, { useState, useEffect } from "react"
import classes from "stylesheets/cart.module.less"
import "stylesheets/main.module.less"
import Layout from "components/Layout/Layout"
import PreHeader from "components/PreHeader/PreHeader"
import Table from "components/Table/Table"
import { PRODUCTS } from "utils/prices"
import { formatMoney } from "utils/functions"
import plus from "images/add.svg"
import minus from "images/substract.svg"
import bin from "images/bin.svg"
import { Link } from "gatsby"
import { PayPalButton } from "react-paypal-button-v2"

const CLIENT = {
  sandbox:
    "ATtCcMdOrupEBVxY8Wn3CaNzmswgnasFD9vZTMPu0hq--FBPfC-juTzFe2eOCwL3KKhF8ooRRar523Pp",
  production:
    "AYXOqRUfWU1KrAknRKBYJxhboFTgLrhhaSg-0ExoPcE7grLqlEaEDAqetDzaf0ury9Ht8U8bsTuIU3ie",
}

const CLIENT_ID =
  process.env.GATSBY_ENV === "PRODUCTION" ? CLIENT.production : CLIENT.sandbox

export default () => {
  let [order, setOrder] = useState([])

  useEffect(() => {
    setOrderFromStorage()
  }, [])

  let setOrderFromStorage = () => {
    if (typeof localStorage === "undefined") return
    let cart = JSON.parse(localStorage.cart || "{}")
    setOrder(
      Object.keys(cart)
        .filter(key => !!cart[key].amount)
        .map(objKey => ({
          code: objKey,
          ...PRODUCTS[objKey],
          ...cart[objKey],
        }))
    )
  }

  let setNewProductAmount = (newOrder, newValue, code, index) => {
    if (newValue === 0) {
      newOrder.splice(index, 1)
    } else {
      newOrder[index] = {
        ...newOrder[index],
        amount: newValue,
      }
    }
    setOrder(newOrder)
    let cart = JSON.parse(localStorage.cart)
    cart[code].amount = newValue
    localStorage.cart = JSON.stringify(cart)
  }

  let reduceAmount = code => {
    let index = order.findIndex(it => it.code === code)
    let newOrder = order.map(it => ({ ...it }))
    let newValue = newOrder[index].amount - 1
    setNewProductAmount(newOrder, newValue, code, index)
  }

  let increaseAmount = code => {
    let index = order.findIndex(it => it.code === code)
    let newOrder = order.map(it => ({ ...it }))
    let newValue = newOrder[index].amount + 1
    setNewProductAmount(newOrder, newValue, code, index)
  }

  let removeProduct = code => {
    let index = order.findIndex(it => it.code === code)
    let newOrder = order.map(it => ({ ...it }))
    let newValue = 0
    setNewProductAmount(newOrder, newValue, code, index)
  }

  let calculateTotal = () =>
    order.reduce((acc, { price, amount }) => acc + price * amount, 0)

  let columns = [
    {
      title: "Producto",
      dataIndex: "name",
      render: (name, element) => (
        <div className={classes.product}>
          <Link to={element.link}>
            <img
              src={element.image}
              alt="logo"
              width="70"
              height="90"
              loading="lazy"
            />
            {name}
          </Link>
        </div>
      ),
    },
    {
      title: "Precio",
      dataIndex: "price",
      render: price => "$" + formatMoney(price),
    },
    {
      title: "Cantidad",
      dataIndex: "amount",
      render: (amount, element) => (
        <div className={classes.actions}>
          <img src={bin} alt="" onClick={() => removeProduct(element.code)} />
          <div className={classes.changeAmount}>
            <img
              src={minus}
              alt=""
              onClick={() => reduceAmount(element.code)}
            />
            <span>{amount}</span>
            <img
              src={plus}
              alt=""
              onClick={() => increaseAmount(element.code)}
            />
          </div>
        </div>
      ),
    },
    {
      title: "Total (MXN)",
      dataIndex: "name",
      render: (_, { amount, price }) => "$" + formatMoney(amount * price),
    },
  ]

  let encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  let stringifyProducts = () => {
    return order.map(it => `${it.name} (${it.amount})`).join(", ")
  }

  let submitPurchase = (orderID, details) => {
    if (typeof window === "undefined") return
    let stringDetails = JSON.stringify(details)
    console.log("stringDetails", stringDetails)
    let units = details.purchase_units
    let direccion = {}
    if (units.length) {
      let address = units[0].shipping.address
      direccion = {
        Direccion: address.address_line_1,
        Colonia: address.address_line_2,
        Estado: address.admin_area_1,
        Ciudad: address.admin_area_2,
        Pais: address.country_code,
        "Codigo Postal": address.postal_code,
        Nombre: address.full_name,
        "Total Pagado": `${units[0].amount.value} ${units[0].amount.currency_code}`,
        "Cadena de detalles de PayPal": stringDetails,
      }
    }
    try {
      fetch("/orden-completada", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "orden-completada",
          Productos: stringifyProducts(),
          "ID de la orden": orderID,
          Email: details.payer.email_address,
          ...direccion,
        }),
      })
        .then(() => window.location.replace("/orden-completada"))
        .catch(error => console.log("NETLIFY ERROR 1:", error))
    } catch (error) {
      console.log("NETLIFY ERROR 2:", error)
    }
  }

  console.log("stringifyProducts", stringifyProducts())

  return (
    <Layout>
      <form
        data-netlify="true"
        className={classes.container}
        action="/orden-completada"
        method="POST"
        name="orden-completada"
      >
        <PreHeader type="h2" />
        <h1>CARRITO DE COMPRAS</h1>
        {!order.length ? (
          <p className={classes.empty}>
            <span>Tu carrito está vacio.</span>
            <Link to="/cerraduras">Ver Cerraduras</Link>{" "}
          </p>
        ) : (
          <>
            <Table
              dataSource={order}
              columns={columns}
              rowKey="code"
              className={classes.largeTable}
            />
            <h3 className={classes.total}>
              <span>Total:</span>
              <b>{"$" + formatMoney(calculateTotal())}</b>
            </h3>
            <div className={classes.paypal}>
              <PayPalButton
                amount="0.01"
                onSuccess={(details, data) => {
                  console.log("data", data)
                  console.log("details", details)
                  submitPurchase(data.orderID, details)
                }}
                onError={error => {
                  console.log("error", error)
                }}
                options={{
                  clientId: CLIENT_ID,
                  currency: "MXN",
                }}
                style={{
                  layout: "vertical",
                  color: "blue",
                  shape: "rect",
                  label: "pay",
                  false: false,
                }}
              />
            </div>
          </>
        )}
      </form>
    </Layout>
  )
}
