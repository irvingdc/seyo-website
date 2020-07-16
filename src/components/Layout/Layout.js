import React from "react"
import classes from "./Layout.module.less"
import Nav from "components/Nav/Nav"

export default ({ children }) => (
  <div className={classes.container}>
    <Nav />
    <div className={classes.content}>{children}</div>
  </div>
)
