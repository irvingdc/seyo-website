import React from "react"
import classes from "./Resources.module.less"
import app from "images/resources/app.png"
import manual from "images/resources/manual.png"
import plantillas from "images/resources/plantillas.png"
import videoPreview from "images/resources/videoPreview.png"

export default ({ hideVideo }) => (
  <div className={classes.container}>
    <h4>
      Recursos para <b>instalación</b>
    </h4>
    <div className={classes.flex}>
      <img src={manual} alt="manual" />
      <img src={plantillas} alt="plantillas" />
      <img src={app} alt="app" />
    </div>
  </div>
)
