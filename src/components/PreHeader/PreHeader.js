import React from "react"
import { getMinPriceString } from "utils/functions"
import classes from "./PreHeader.module.less"

export default ({ type }) => (
  <div className={classes.container}>
    {type === "h1" ? (
      <h1>
        Cerraduras Inteligentes <b>SEYO</b>{" "}
      </h1>
    ) : (
      <h2>
        Cerraduras Inteligentes <b>SEYO</b>{" "}
      </h2>
    )}
    <h3>
      Desde <b>{getMinPriceString()}</b>
    </h3>
  </div>
)
