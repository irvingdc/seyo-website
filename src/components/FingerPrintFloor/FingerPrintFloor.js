import React from "react"
import classes from "stylesheets/serviceFloor.module.less"
import huella_recurso from "images/locks/shared_all/huella_recurso.png"
import huella_b from "images/icons/huella_b.png"

export default ({ img }) => (
  <div className={classes.container}>
    <div>
      <div className={classes.text}>
        <h3>
          <img src={huella_b} alt="" />
          <b>
            HUELLA DACTILAR<span>Tu llave más segura.</span>
          </b>
        </h3>
        <p>
          Registra <b>la cantidad de huellas que tu necesites</b> (registro
          ilimitado) desde tu app movil y <b>manten siempre el control.</b>
        </p>
      </div>
      <img src={img || huella_recurso} alt="" />
    </div>
    <p>
      Con la <b>aplicación TT LOCK</b> lleva registro de accesos y manten
      siempre el control de tu cerradura <b>desde cualquier parte del mundo</b>.
    </p>
  </div>
)
