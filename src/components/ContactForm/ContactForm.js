import React from "react"
import classes from "./ContactForm.module.less"

export default () => (
  <div className={classes.container}>
    <div>
      <label>Correo Electrónico:</label>
      <input type="text" />
    </div>
    <div>
      <label>Nombre:</label>
      <input type="text" />
    </div>
    <div>
      <label>Teléfono:</label>
      <input type="text" />
    </div>
    <div>
      <label>Mensaje:</label>
      <textarea></textarea>
    </div>
  </div>
)
