import { Link } from "gatsby"
import React from "react"
import classes from "./Nav.module.less"

export default ({ title, description }) => {
  return <div className={classes.container}>
      <Link to="/">link</Link>
  </div>
}
