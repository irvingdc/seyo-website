import React from "react"
import { Link } from "gatsby"
import classes from "stylesheets/sent.module.less"
import plane from "images/package.svg"

export default () => (
  <div className={classes.container}>
    <div>
      <img src={plane} alt="Icono Avion" className={classes.package} />
      <h1>¡Tu orden ha sido enviada!</h1>
      <p>
        Pronto nos pondremos en contacto contigo para dar seguimiento a tu
        pedido.
      </p>
      <Link to="/">
        <button>Regresar</button>
      </Link>
    </div>
  </div>
)
