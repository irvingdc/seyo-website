import React, { useEffect, useState } from "react"
import classes from "./Cart.module.less"
import cart from "images/icons/cart.svg"
import { Link } from "gatsby"
import { countCartItems } from "../../utils/functions"
import { useToasts, ToastProvider } from "react-toast-notifications"

var EventBus = require("eventbusjs")

let Cart = () => {
  const { addToast } = useToasts()

  useEffect(() => {
    EventBus.addEventListener("rerender_cart", () => {
      setCartCount(countCartItems())
    })
    EventBus.addEventListener("show_toast", (_, message, type) => {
      addToast(message, {
        appearance: type,
        autoDismiss: type !== "error",
      })
    })
  }, [])

  const [cartCount, setCartCount] = useState(countCartItems())

  return (
    <Link className={classes.container} to="/comprar">
      <img src={cart} alt="cart" className={classes.icon} />
      {cartCount > 0 ? (
        <span className={classes.count}>{cartCount}</span>
      ) : null}
      <div className={classes.hoverContent}></div>
    </Link>
  )
}

export const addToCart = code => {
  if (typeof localStorage === "undefined") return
  let cart = JSON.parse(localStorage.cart || "{}")
  let product = cart[code] || { amount: 0 }
  product.amount += 1
  cart[code] = product
  localStorage.cart = JSON.stringify(cart)
  EventBus.dispatch("rerender_cart")
  EventBus.dispatch(
    "show_toast",
    null,
    "El producto se ha agregado al carrito.",
    "success"
  )
}

export default () => (
  <ToastProvider>
    <Cart />
  </ToastProvider>
)
