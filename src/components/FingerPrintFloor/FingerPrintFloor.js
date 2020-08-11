import React from "react"
import classes from "./FingerPrintFloor.module.less"
import huella_recurso from "images/locks/shared_all/huella_recurso.png"

export default ({ img }) => (
  <div className={classes.container}>
    <div>
      <img src={img || huella_recurso} alt="" />
      <div className={classes.text1}>
        <h3>
          <b>HUELLA DACTILAR</b>
        </h3>
        <p>Tu llave más segura.</p>
      </div>
      <div className={classes.text2}>
        <p>
          Registra <b>la cantidad de huellas que tu necesites</b> (registro
          ilimitado) desde tu app movil y <b>manten siempre el control.</b>
        </p>
      </div>
    </div>
    <p>
      Con la <b>aplicación TT LOCK</b> lleva registro de accesos y manten
      siempre el control de tu cerradura <b>desde cualquier parte del mundo</b>.
    </p>
  </div>
)
