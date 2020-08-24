import React from "react"
import classes from "./Resources.module.less"
import app from "images/support/app.jpg"
import manual from "images/support/manual.jpg"
import plantillas from "images/support/plantillas.jpg"
import video from "images/support/video.jpg"

export default () => (
  <div className={classes.container}>
    <div className={classes.flex2}>
      <a rel="noopener noreferrer" href="#" target="_blank">
        <img src={manual} alt="manual" />
      </a>
      <a rel="noopener noreferrer" href="#" target="_blank">
        <img src={plantillas} alt="plantillas" />
      </a>
      <a rel="noopener noreferrer" href="#" target="_blank">
        <img src={app} alt="app" />
      </a>
      <a rel="noopener noreferrer" href="#" target="_blank">
        <img src={video} alt="video" />
      </a>
    </div>
  </div>
)
