import React from "react"
import classes from "./AccessCardFloor.module.less"
import app_recurso from "images/locks/shared_all/tarjetasRFRecurso.png"

export default ({ img }) => (
  <div className={classes.container}>
    <div>
      <img src={img || app_recurso} alt="" />
      <div className={classes.text1}>
        <h3>
          <b>TARJETA DE ACCESO</b>
        </h3>
        <p>Siempre al alcance</p>
      </div>
      <p>
        Registra <b>hasta 200 tarjetas</b> de proximidad y apertura tus
        cerraduras sin la necesidad de usar tus manos,{" "}
        <b>solo acerca y abre.</b>
      </p>
    </div>
  </div>
)
