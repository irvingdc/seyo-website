import React from "react";
import classes from "./index.module.less"
import warning from "images/warning.svg"

export default ({ message }) => <div className={classes.container}>
    <img src={warning} alt="Advertencia" />
    <span>{message}</span>
</div>