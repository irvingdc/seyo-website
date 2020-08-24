import React from "react"
import classes from "./Layout.module.less"
import Nav from "components/Nav/Nav"
import PurchaseFooter from "components/PurchaseFooter/PurchaseFooter"

export default ({ children, productToPurchase }) => (
  <div className={classes.container}>
    <Nav />
    {productToPurchase ? (
      <PurchaseFooter productToPurchase={productToPurchase} />
    ) : null}
    <div className={classes.content}>{children}</div>
  </div>
)
