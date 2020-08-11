import React from "react"
import classes from "./KeyFloor.module.less"
import app_recurso from "images/locks/shared_all/llaveMecanicaRecurso.png"

export default ({ img }) => (
  <div className={classes.container}>
    <div>
      <img src={img || app_recurso} alt="" />
      <div className={classes.text1}>
        <h3>
          <b>LLAVE MECÁNICA</b>
        </h3>
        <p>Siempre en control</p>
      </div>
      <p>
        Tu <b>llave mecanica</b> te permite tener siempre la{" "}
        <b>ultima decision</b> sobre tu cerradura, abre o cierra con ella{" "}
        <b>cuando sea necesario.</b>
      </p>
    </div>
  </div>
)
