import React from "react"
import classes from "./AppWifiFloor.module.less"
import app_recurso from "images/locks/shared_all/app-wifiRecurso.png"
import { Link } from "gatsby"

export default () => (
  <div className={classes.container}>
    <div>
      <img src={app_recurso} alt="" />
      <div className={classes.text1}>
        <h3>
          <b>APERTURA REMOTA</b>
        </h3>
        <p>
          Utiliza conectividad a <b>internet</b> para aperturar tu cerradura
          inteligente y recibe <b>notificaciones</b> en tiempo real de su uso en
          <b>cualquier parte del mundo.</b> <br />
          (Solo con <Link to="/otros/gateway/">Gateway*</Link>)
        </p>
      </div>
      <div className={classes.text2}>
        <h3>
          <b>APERTURA LOCAL POR APP</b>
        </h3>
        <p>
          Control via <b>bluetooth</b>.
          <br />
          <br /> Utiliza tu <b>aplicación</b> para aperturar tu cerradura via{" "}
          <b>bluetooth</b> (en un radio de hasta 2 metros) y recibe{" "}
          <b>notificaciones</b> en tiempo real de su uso.
        </p>
      </div>
    </div>
    <p>
      Utiliza tu <b>APP TTLOCK</b> y registra mutiples usuarios registrando
      huellas, codigos o tarjetas de apertura.
    </p>
  </div>
)
