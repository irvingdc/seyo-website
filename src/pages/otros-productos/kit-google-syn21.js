import React from "react"
import classes from "stylesheets/singleLock.module.less"
import "stylesheets/main.module.less"
import banner from "images/accesories/KIT_GOOGLE_SYN21/banner.jpg"
import google from "images/accesories/KIT_GOOGLE_SYN21/google.png"
import lock from "images/accesories/KIT_GOOGLE_SYN21/lock.jpeg"
import gateway from "images/accesories/KIT_GOOGLE_SYN21/gateway.png"
import LockBanner from "components/LockBanner/LockBanner"
import { getPriceString } from "../../utils/functions"
import Layout from "components/Layout/Layout"
import PreHeader from "components/PreHeader/PreHeader"
import FingerPrintFloor from "components/FingerPrintFloor/FingerPrintFloor"
import CodesFloor from "components/CodesFloor/CodesFloor"
import { addToCart } from "components/Cart/Cart"

const KEY_NAME = "KIT_GOOGLE_SYN21"

export default () => (
  <Layout
    productToPurchase={KEY_NAME}
    title={`Seyo | Productos - Kit De Apertura Remota Por Google Home con SYN21`}
    description="Abre la puerta al futuro, abre la puerta a SEYO."
    canonical="/otros-productos/kit-google-syn21/"
  >
    <div className={classes.container}>
      <PreHeader type="h2" />
      <p><br /></p>
      <h1>Kit De Apertura Remota Por Google Home con SYN21</h1>
      <p><br /></p>
      <LockBanner
        img={banner}
        label="Incluye:"
        title={<ul>
          <li>Cerradura SYN21</li>
          <li>Google Nest Mini</li>
          <li>Gateway</li>
          <li>Envío Gratis</li>
        </ul>}
        price={getPriceString(KEY_NAME)}
        actions={[
          {
            title: "COMPRAR",
            onClick: () => addToCart(KEY_NAME),
          },
        ]}
      />
      <p><br /></p>
      <p><br /></p>
      <p><br /></p>
      <h2 className={classes.intro}>
        Conoce más del <b>KIT</b>
      </h2>
      <CodesFloor img={gateway} hideExtraText hideTitle
        text={<p>
          Realiza aperturas desde cualquier lugar del mundo desde tu APP.
          <br />
          <br />
          Recibe notificaciones de apertura en tiempo real.
        </p>} />
      <FingerPrintFloor img={lock} hideExtraText hideTitle
        text={<p>
          Olvídate de las llaves con SYN21 tendras 6 métodos de apertura.
          <br />
          <br />
          Mecanismos de alta seguridad y materiales de la mas alta gama.
        </p>} />
      <CodesFloor img={google} hideExtraText hideExtraText hideTitle
        text={<p>
          Ademas de los beneficios que te brindan los productos SEYO,
          utiliza tu Google nest mini para abrir tu cerradura con un
          sencillo comando de voz.
        </p>}
      />
    </div>
  </Layout>
)
