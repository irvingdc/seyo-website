import React from "react"
import classes from "./ContactForm.module.less"

export default () => (
  <form
    className={classes.container}
    data-netlify="true"
    method="POST"
    name="contacto"
    action="/mensaje-enviado/"
  >
    <input type="hidden" name="form-name" value="contacto" />
    <div>
      <label for="Correo">Correo Electrónico:</label>
      <input type="email" name="Correo" id="Correo" required />
    </div>
    <div>
      <label for="Nombre">Nombre:</label>
      <input type="text" name="Nombre" id="Nombre" required />
    </div>
    <div>
      <label for="Telefono">Teléfono:</label>
      <input type="number" name="Telefono" id="Telefono" required />
    </div>
    <div>
      <label for="Mensaje">Mensaje:</label>
      <textarea name="Mensaje" id="Mensaje" required></textarea>
    </div>
    <div className={classes.button}>
      <button className="small-button-blue-pill">ENVIAR</button>
    </div>
  </form>
)
