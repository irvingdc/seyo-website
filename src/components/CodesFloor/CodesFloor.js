import React from "react"
import classes from "./CodesFloor.module.less"
import app_recurso from "images/locks/shared_all/codigoRecurso.png"

export default ({ img }) => (
  <div className={classes.container}>
    <div>
      <img src={img || app_recurso} alt="" />
      <div className={classes.text1}>
        <h3>
          <b>CÓDIGO DE ACCESO</b>
        </h3>
        <p>Desde cualquier lugar</p>
      </div>
      <p>
        Genera cuantos <b>códigos</b> necesites, programa sus permisos de uso
        desde tu app movil y <b>compártelos</b> de manera ilimitada.
      </p>
    </div>
    <p>
      Comparte códigos de acceso mediante mensajes de texto, <b>Whatsapp</b> o{" "}
      <b>Messenger</b>.
    </p>
  </div>
)
