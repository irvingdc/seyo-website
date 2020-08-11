import React from "react"
import classes from "./Resources.module.less"
import app from "images/support/app.jpg"
import manual from "images/support/manual.jpg"
import plantillas from "images/support/plantillas.jpg"
import video from "images/support/video.jpg"

export default () => (
  <div className={classes.container}>
    <div className={classes.flex2}>
      <img src={manual} alt="manual" />
      <img src={plantillas} alt="plantillas" />
      <img src={app} alt="app" />
      <img src={video} alt="video" />
    </div>
  </div>
)
