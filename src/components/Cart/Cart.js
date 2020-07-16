import React from "react"
import classes from "./Cart.module.less"
import cart from "images/icons/cart.svg"

export default () => (
  <div className={classes.container}>
    <img src={cart} alt="cart" className={classes.icon} />
    <div className={classes.hoverContent}></div>
  </div>
)
