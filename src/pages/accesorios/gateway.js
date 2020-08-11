import React from "react"
import classes from "stylesheets/singleLock.module.less"
import "stylesheets/main.module.less"
import banner from "images/locks/freya/banner.jpg"
import LockBanner from "components/LockBanner/LockBanner"
import { getPriceString } from "../../utils/functions"
import Layout from "components/Layout/Layout"
import PreHeader from "components/PreHeader/PreHeader"
import UnlockMethods from "components/UnlockMethods/UnlockMethods"
import AppWifiFloor from "components/AppWifiFloor/AppWifiFloor"
import Resources from "components/Resources/Resources"

const KEY_NAME = "GATEWAY"

export default () => (
  <Layout>
    <div className={classes.container}>
      <PreHeader type="h2" />
      <h1>{KEY_NAME}</h1>
      <LockBanner
        img={banner}
        label="Conectividad WiFi"
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
        Conectividad <b>WiFi</b> para tu <b>cerradura</b>
      </h2>
      <div className={classes.methods}>
        <UnlockMethods
          size="large"
          methods={["wifi", "app"]}
          direction="center"
        />
      </div>
      <AppWifiFloor />
      <Resources />
    </div>
  </Layout>
)
