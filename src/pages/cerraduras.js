import React from "react"
import "stylesheets/main.module.less"
import classes from "stylesheets/locks.module.less"
import Layout from "components/Layout/Layout"
import locks_all from "images/banners/locks_all_cropped.jpg"
import LineSubtitle from "components/LineSubtitle/LineSubtitle"
import syn from "images/locks/syn/syn.png"
import syf from "images/locks/syf/syf_flipped.png"
import tyr from "images/locks/tyr/tyr.png"
import not from "images/locks/not/not_flipped.png"
import sol from "images/locks/sol/sol.png"
import freya from "images/locks/freya/freya-flipped.png"
import mist from "images/locks/mist19/mist19.png"
import { getPriceString } from "utils/functions"
import LockCard from "components/LockCard/LockCard"
import FingerPrintFloor from "components/FingerPrintFloor/FingerPrintFloor"
import AppWifiFloor from "components/AppWifiFloor/AppWifiFloor"
import CodesFloor from "components/CodesFloor/CodesFloor"
import AccessCardFloor from "components/AccessCardFloor/AccessCardFloor"
import KeyFloor from "components/KeyFloor/KeyFloor"
import PreHeader from "components/PreHeader/PreHeader"

export default () => (
  <Layout>
    <div className={classes.container}>
      <div className={classes.locksBanner}>
        <PreHeader type="h1"/>
        <p>
          Abre la puerta al <b>futuro</b>, abre la puerta a <b>SEYO</b>.
        </p>
        <img src={locks_all} alt="Nuestras Cerraduras" />
      </div>
      <LineSubtitle className={classes.valquiriaText}>
        CATÁLOGO VALQUIRIA
      </LineSubtitle>
      <div className={classes.allLocks}>
        <LockCard
          link="/cerraduras/syn19"
          direction="left"
          title="SYN19"
          img={syn}
          price={getPriceString("SYN19")}
          methods={["huella", "wifi", "app", "codigo", "llave", "tarjeta"]}
        />
        <LockCard
          link="/cerraduras/syf19"
          direction="right"
          title="SYF19"
          img={syf}
          price={getPriceString("SYF19")}
          methods={["huella", "wifi", "app", "codigo", "llave", "tarjeta"]}
        />
        <LockCard
          link="/cerraduras/tyr19"
          direction="left"
          title="TYR19"
          img={tyr}
          price={getPriceString("TYR19")}
          methods={["huella", "wifi", "app", "codigo", "llave", "tarjeta"]}
        />
        <LockCard
          link="/cerraduras/not19"
          direction="right"
          title="NOT19"
          img={not}
          price={getPriceString("NOT19")}
          methods={["huella", "wifi", "app", "codigo", "llave", "tarjeta"]}
        />
        <LockCard
          link="/cerraduras/sol19"
          direction="left"
          title="SOL19"
          img={sol}
          price={getPriceString("SOL19")}
          methods={["huella", "wifi", "app", "codigo", "llave", "tarjeta"]}
        />
        <LockCard
          link="/cerraduras/freya19"
          direction="right"
          title="FREYA19"
          img={freya}
          price={getPriceString("FREYA19")}
          methods={["wifi", "app", "codigo", "llave", "tarjeta"]}
        />
        <LockCard
          link="/cerraduras/mist19"
          direction="left"
          title="MIST19"
          img={mist}
          price={getPriceString("MIST19")}
          methods={["huella", "wifi", "app", "llave"]}
        />
      </div>
      <LineSubtitle className={classes.valquiriaText}>
        Métodos de apertura
      </LineSubtitle>
      <FingerPrintFloor />
      <AppWifiFloor />
      <CodesFloor />
      <AccessCardFloor />
      <KeyFloor />
    </div>
  </Layout>
)