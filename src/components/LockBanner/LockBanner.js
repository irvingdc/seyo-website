import React from "react"
import { Link } from "gatsby"
import classes from "./LockBanner.module.less"

export default ({
  img,
  title,
  label,
  price,
  actions,
  footer,
  darkText,
  reverse,
}) => (
  <div className={classes.container}>
    <div
      className={[
        classes.content,
        darkText ? classes.darkText : "",
        reverse ? classes.reverse : "",
      ].join(" ")}
    >
      <h3>{label}</h3>
      <h2>{title}</h2>
      <h4>{price}</h4>
      <div className={classes.buttons}>
        {!!actions &&
          actions.map(it =>
            it.url ? (
              <Link to={it.url}>
                <button
                  className={
                    it.blue
                      ? "small-button-blue-pill"
                      : "small-button-white-pill"
                  }
                >
                  {it.title}
                </button>
              </Link>
            ) : (
              <button
                className={
                  it.blue ? "small-button-blue-pill" : "small-button-white-pill"
                }
                onClick={it.onClick ? it.onClick : () => {}}
              >
                {it.title}
              </button>
            )
          )}
      </div>
      <h4>{footer}</h4>
    </div>
    <img src={img} alt="" />
  </div>
)
