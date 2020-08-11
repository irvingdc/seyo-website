import React from "react"
import classes from "./UnlockMethods.module.less"

import huella from "images/icons/huella.png"
import wifi from "images/icons/wifi.png"
import app from "images/icons/app.png"
import codigo from "images/icons/codigo.png"
import llave from "images/icons/llave.png"
import tarjeta from "images/icons/tarjeta.png"

const ICONS = {
  huella,
  wifi,
  app,
  codigo,
  llave,
  tarjeta,
}

export default ({ methods, direction, size }) => {
  return methods && methods.length ? (
    <div
      className={[classes.methods, classes[direction], classes[size]].join(" ")}
    >
      <div>
        <label>MÉTODOS DE APERTURA</label>
        <div>
          {methods.map(method => (
            <div>
              <span>
                <img src={ICONS[method]} alt="icono" />
                <p>{method.toUpperCase()}</p>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : null
}
