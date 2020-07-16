import React from "react"
import classes from "./LockCard.module.less"
import linesLeft from "images/lines/lines_locks.png"
import linesRight from "images/lines/lines_locks_flipped.png"

export default ({ direction, title, img, price }) => (
  <div className={classes.container}>
    {direction == "left" ? (
      <div className={classes.contentLeft}>
        <div className={classes.text}>
          <div>
            <h3>CERRADURA INTELIGENTE</h3>
            <h2>{title}</h2>
          </div>
          <div>
            <span className={classes.price}>{price}</span>
            <span className={classes.button}>AGREGAR AL CARRITO</span>
            <span className={classes.button}>COMPRAR AHORA</span>
          </div>
          <img src={linesRight} alt="" className={classes.lines} />
        </div>
        <img src={img} alt="Cerradura" />
      </div>
    ) : (
      <div className={classes.contentRight}>
        <img src={img} alt="Cerradura" />
        <div className={classes.text}>
          <div>
            <h3>CERRADURA INTELIGENTE</h3>
            <h2>{title}</h2>
          </div>
          <div>
            <span className={classes.price}>{price}</span>
            <span className={classes.button}>AGREGAR AL CARRITO</span>
            <span className={classes.button}>COMPRAR AHORA</span>
          </div>
          <img src={linesLeft} alt="" className={classes.lines} />
        </div>
      </div>
    )}
  </div>
)
