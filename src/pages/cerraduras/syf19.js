import React from "react"
import classes from "stylesheets/singleLock.module.less"
import "stylesheets/main.module.less"
import syf from "images/locks/syn/synBanner.jpg"
import mecanismo from "images/locks/syf/syfMecanismo.jpg"
import llave from "images/locks/shared_all/llaveMecanicaRecurso2.png"
import codigo from "images/locks/syf/codigo.png"
import huella from "images/locks/syf/huella.png"
import tarjeta from "images/locks/syf/tarjeta.png"
import LockBanner from "components/LockBanner/LockBanner"
import { getPriceString } from "../../utils/functions"
import Layout from "components/Layout/Layout"
import PreHeader from "components/PreHeader/PreHeader"
import UnlockMethods from "components/UnlockMethods/UnlockMethods"
import LockMachinery from "components/LockMachinery/LockMachinery"
import FingerPrintFloor from "components/FingerPrintFloor/FingerPrintFloor"
import AppWifiFloor from "components/AppWifiFloor/AppWifiFloor"
import CodesFloor from "components/CodesFloor/CodesFloor"
import AccessCardFloor from "components/AccessCardFloor/AccessCardFloor"
import Resources from "components/Resources/Resources"
import KeyFloor from "components/KeyFloor/KeyFloor"

const KEY_NAME = "SYF19"

export default () => (
  <Layout>
    <div className={classes.container}>
      <PreHeader type="h2" />
      <h1>{KEY_NAME}</h1>
      <LockBanner
        img={syf}
        label="Cerradura Inteligente"
        title={KEY_NAME}
        price={getPriceString(KEY_NAME)}
        darkText
        actions={[
          {
            title: "COMPRA YA",
            url: "/",
          },
        ]}
      />
      <h2 className={classes.intro}>
        Conoce más de <b>{KEY_NAME}</b>
      </h2>
      <LockMachinery
        img={mecanismo}
        options={[
          <p>
            Pestillo <b>automático</b>
          </p>,
          <p>
            Anti <b>tarjetas</b>
          </p>,
          <p>
            Bulón de <b>seguridad</b>
          </p>,
          <p>
            Bulón <b>manual</b>
          </p>,
        ]}
      />
      <div className={classes.methods}>
        <UnlockMethods
          size="large"
          methods={["huella", "wifi", "app", "codigo", "llave", "tarjeta"]}
          direction="center"
        />
      </div>
      <FingerPrintFloor img={huella} />
      <AppWifiFloor />
      <CodesFloor img={codigo} />
      <AccessCardFloor img={tarjeta} />
      <KeyFloor img={llave} />
      <Resources />
    </div>
  </Layout>
)