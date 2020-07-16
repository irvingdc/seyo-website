import React from "react"
import classes from "./HomeLocks.module.less"
import syf from "images/locks/syf/syf_flipped.png"
import tyr from "images/locks/tyr/tyr.png"
import not from "images/locks/not/not_flipped.png"
import LockCard from "components/LockCard/LockCard"

export default () => (
  <div className={classes.container}>
    <h2>Lo Más Vendido</h2>
    <LockCard direction="right" title="SYF19" img={syf} price="$8,450.00" />
    <LockCard direction="left" title="TYR19" img={tyr} price="$8,360.00" />
    <LockCard direction="right" title="NOT19" img={not} price="$6,980.00" />
  </div>
)
