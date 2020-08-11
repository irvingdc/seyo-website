import React from "react"
import classes from "./LockCard.module.less"
import linesLeft from "images/lines/lines_locks.png"
import linesRight from "images/lines/lines_locks_flipped.png"
import UnlockMethods from "../UnlockMethods/UnlockMethods"
import { Link } from "gatsby"

let Text = ({ title, price, lineImg, methods, direction, link, subtitle }) => (
  <div className={classes.text}>
    <div>
      <h3>{subtitle ? subtitle : "CERRADURA INTELIGENTE"}</h3>
      <h2>{title}</h2>
      <Link to={link}>VER DETALLES</Link>
    </div>
    <div>
      <span className={classes.price}>{price}</span>
    </div>
    <img src={lineImg} alt="" className={classes.lines} />
    <UnlockMethods methods={methods} direction={direction} />
  </div>
)

export default ({ direction, title, img, price, methods, link, subtitle }) => {
  return (
    <div className={classes.container}>
      {direction == "left" ? (
        <div className={classes.contentLeft}>
          <Text
            title={title}
            price={price}
            lineImg={linesRight}
            methods={methods}
            direction={direction}
            link={link}
            subtitle={subtitle}
          />
          <img src={img} alt="Cerradura" />
        </div>
      ) : (
        <div className={classes.contentRight}>
          <img src={img} alt="Cerradura" />
          <Text
            title={title}
            price={price}
            lineImg={linesLeft}
            methods={methods}
            direction={direction}
            link={link}
            subtitle={subtitle}
          />
        </div>
      )}
    </div>
  )
}
