import React, { Fragment } from "react"
import classes from "./NavContent.module.less"
import logo from "images/logo.png"
import { Link } from "gatsby"
import Cart from "../Cart/Cart"

export default () => (
  <div className={classes.container}>
    <Link to="/" className={classes.logo}>
      <img src={logo} alt="logo" />
    </Link>
    <ul>
      <li>
        <Link to="/cerraduras">Cerraduras Inteligentes</Link>
        <Link to="/otros-productos">Otros Productos</Link>
        <Link to="/accesorios">Accesorios</Link>
        <Link to="/soporte">Soporte</Link>
        <Link to="/comunidad">Comunidad</Link>
        <Link to="/distribuidores">Distribuidores</Link>
      </li>
    </ul>
    <Cart />
  </div>
)
