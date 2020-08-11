import React from "react"
import "stylesheets/main.module.less"
import classes from "stylesheets/accesories.module.less"
import Layout from "components/Layout/Layout"
import banner from "images/accesories/banner.png"
import gateway from "images/accesories/gateway2.png"
import tarjeta from "images/accesories/tarjeta.png"
import { getPriceString } from "utils/functions"
import LockCard from "components/LockCard/LockCard"

export default () => (
  <Layout>
    <div className={classes.container}>
      <div className={classes.locksBanner}>
        <h1>Accesorios</h1>
        <img src={banner} alt="Nuestras Cerraduras" />
      </div>
      <h2>
        Protege lo que más te importa con <b>SEYO</b>.
      </h2>
      <div className={classes.allLocks}>
        <LockCard
          subtitle="CONECTIVIDAD WIFI"
          link="/accesorios/gateway/"
          direction="left"
          title="GATEWAY"
          img={gateway}
          price={getPriceString("GATEWAY")}
          methods={["wifi"]}
        />
        <LockCard
          subtitle="TARJETAS DE ACCESO"
          link="/accesorios/tarjetas-rf/"
          direction="right"
          title="TARJETAS RF"
          img={tarjeta}
          price={getPriceString("TARJETAS_RF")}
          methods={["tarjeta"]}
        />
      </div>
    </div>
  </Layout>
)
