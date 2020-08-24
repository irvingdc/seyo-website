import React from "react"
import classes from "stylesheets/serviceFloor.module.less"
import app_recurso from "images/locks/shared_all/tarjetasRFRecurso.png"
import tarjeta_b from "images/icons/tarjeta_b.png"

export default ({ img }) => (
  <div className={classes.container}>
    <div>
      <div className={classes.text}>
        <h3>
          <img src={tarjeta_b} alt="" />
          <b>
            TARJETA DE ACCESO<span>Siempre al alcance</span>
          </b>
        </h3>
        <p>
          Registra <b>hasta 200 tarjetas</b> de proximidad y apertura tus
          cerraduras sin la necesidad de usar tus manos,{" "}
          <b>solo acerca y abre.</b>
        </p>
      </div>
      <img src={img || app_recurso} alt="" />
    </div>
    <p></p>
  </div>
)
