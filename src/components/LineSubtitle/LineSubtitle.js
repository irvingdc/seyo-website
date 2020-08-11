import React from "react"
import classes from "./LineSubtitle.module.less"

export default ({ children, className }) => (
  <div className={[classes.container, className || []].join(" ")}>
    <h2 className={classes.subtitle}>{children}</h2>
  </div>
)
