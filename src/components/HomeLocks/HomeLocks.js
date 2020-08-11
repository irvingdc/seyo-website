import React from "react"
import classes from "./HomeLocks.module.less"
import syf from "images/locks/syf/syf_flipped.png"
import tyr from "images/locks/tyr/tyr.png"
import not from "images/locks/not/not_flipped.png"
import LockCard from "components/LockCard/LockCard"
import LineSubtitle from "components/LineSubtitle/LineSubtitle"
import { getPriceString } from "utils/functions"

export default () => (
  <div className={classes.container}>
    <LineSubtitle>Los Más Vendidos.</LineSubtitle>
    <LockCard
      direction="right"
      title="SYF19"
      img={syf}
      price={getPriceString("SYF19")}
    />
    <LockCard
      direction="left"
      title="TYR19"
      img={tyr}
      price={getPriceString("TYR19")}
    />
    <LockCard
      direction="right"
      title="NOT19"
      img={not}
      price={getPriceString("NOT19")}
    />
  </div>
)
