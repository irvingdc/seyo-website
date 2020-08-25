import React, { useEffect, useState } from "react"
import classes from "./PurchaseFooter.module.less"
import { addToCart } from "components/Cart/Cart"

export default ({ productToPurchase }) => {
  let [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener("scroll", e => {
        if (window.scrollY > 100) {
          setScrolled(true)
        } else {
          setScrolled(false)
        }
      })
    }
  }, [])
  return (
    <div
      className={[classes.container, scrolled ? classes.scrolled : ""].join(
        " "
      )}
    >
      <div>
        <h5>
          <b>¿Agregar al carrito?</b>
        </h5>
        <button
          className={classes.button}
          onClick={() => addToCart(productToPurchase)}
        >
          ¡Si, agregar!
        </button>
      </div>
    </div>
  )
}
