import React from "react"
import classes from "./HomeLocks.module.less"
import syn from "images/locks/syn/syn_alt.png"
import tyr from "images/locks/tyr/tyr_alt.png"
import LockCard from "components/LockCard/LockCard"
import { getPriceString } from "utils/functions"

export default () => (
  <div className={classes.container}>
    <h2>Seyo compatible con Google Home y Alexa.</h2>
    <LockCard
      subtitle="Kit De Apertura Remota"
      link="/otros-productos/kit-google-syn21/"
      direction="left"
      title="Google Home + SYN21"
      img={syn}
      price={getPriceString("KIT_GOOGLE_SYN21")}
      methods={[]}
    />
    <LockCard
      subtitle="Kit De Apertura Remota"
      link="/otros-productos/kit-google-tyr21/"
      direction="right"
      title="Google Home + TYR21"
      img={tyr}
      price={getPriceString("KIT_GOOGLE_TYR21")}
      methods={[]}
    />
  </div>
)
