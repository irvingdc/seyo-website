import React, { Fragment } from "react"
import classes from "./LockMachinery.module.less"

export default ({ img, options, padRight, title }) => (
  <div className={classes.machinery}>
    <img src={img} alt="mecanismo" />
    {title ? (
      title
    ) : (
      <p>
        <span>Mecanismo con</span>
        <b>alto nivel de seguridad</b>
      </p>
    )}
    <div className={[classes.text, padRight ? classes.padRight : ""].join(" ")}>
      {options.map((it, index) => (
        <Fragment key={index}>{it}</Fragment>
      ))}
    </div>
  </div>
)
