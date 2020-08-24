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

export default () => {
  let [order, setOrder] = useState([])

  useEffect(() => {
    setOrderFromStorage()
  }, [])

  let setOrderFromStorage = () => {
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
  console.log("order", order)

  return (
    <Layout>
      <div className={classes.container}>
        <PreHeader type="h2" />
        <h1>CARRITO DE COMPRA</h1>
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
      </div>
    </Layout>
  )
}
