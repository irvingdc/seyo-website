import React from "react"
import classes from "stylesheets/serviceFloor.module.less"
import huella_recurso from "images/locks/shared_all/huella_recurso.png"
import huella_b from "images/icons/huella_b.png"

export default ({
  icon,
  img,
  text,
  hideExtraText,
  bottomText,
  title,
  label,
}) => (
  <div className={classes.container}>
    <div>
      <div className={classes.text}>
        <h3>
          <img src={icon || huella_b} alt="" />
          <b>
            {title || "HUELLA DACTILAR"}
            <span>{label || "Tu llave más segura."}</span>
          </b>
        </h3>
        {text ? (
          text
        ) : (
          <p>
            Registra <b>la cantidad de huellas que tu necesites</b> (registro
            ilimitado) desde tu app movil y <b>manten siempre el control.</b>
          </p>
        )}
      </div>
      <img src={img || huella_recurso} alt="" />
    </div>
    {hideExtraText ? (
      <p></p>
    ) : (
      bottomText || (
        <p>
          Con la <b>aplicación TT LOCK</b> lleva registro de accesos y manten
          siempre el control de tu cerradura{" "}
          <b>desde cualquier parte del mundo</b>.
        </p>
      )
    )}
  </div>
)
