import React from "react"
import classes from "stylesheets/serviceFloor.module.less"
import app_recurso from "images/locks/shared_all/llaveMecanicaRecurso.png"
import llave_b from "images/icons/llave_b.png"

export default ({ img }) => (
  <div className={classes.container}>
    <div>
      <img src={img || app_recurso} alt="" />
      <div className={classes.text}>
        <h3>
          <img src={llave_b} alt="" />
          <b>
            LLAVE MECÁNICA<span>Siempre en control</span>
          </b>
        </h3>
        <p>
          Tu <b>llave mecanica</b> te permite tener siempre la{" "}
          <b>última decision</b> sobre tu cerradura, abre o cierra con ella{" "}
          <b>cuando sea necesario.</b>
        </p>
      </div>
    </div>
    <p></p>
  </div>
)
