import React from "react"
import classes from "./Cart.module.less"
import cart from "images/icons/cart.svg"
import { Link } from "gatsby"

export default () => (
  <Link className={classes.container} to="/comprar">
    <img src={cart} alt="cart" className={classes.icon} />
    <div className={classes.hoverContent}></div>
  </Link>
)
