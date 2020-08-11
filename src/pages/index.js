import React, { Fragment } from "react"
import "stylesheets/main.module.less"
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "components/Layout/Layout"
import Carousel from "components/Carousel/Carousel"
import LockBanner from "components/LockBanner/LockBanner"
import HomeLocks from "components/HomeLocks/HomeLocks"
import img1 from "images/banners/freya_home.jpg"
import img2 from "images/banners/not_home.jpg"
import img3 from "images/banners/syn_home.jpg"
import otros_productos from "images/banners/otros_productos.png"
import locks_all from "images/banners/locks_all.jpg"
import classes from "stylesheets/index.module.less"
import { Link } from "gatsby"

const IndexPage = () => (
  <Layout>
    <div className={classes.carousel}>
      <Carousel
        items={[
          <LockBanner
            img={img1}
            label="Cerradura Inteligente"
            title="FREYA19"
            price="$5,270.00"
            actions={[
              {
                title: "CONOCE MÁS",
                url: "/",
              },
              {
                title: "COMPRA YA",
                url: "/",
              },
            ]}
          />,
          <LockBanner
            img={img2}
            label="Cerradura Inteligente"
            title="FREYA19"
            price="$5,270.00"
            actions={[
              {
                title: "CONOCE MÁS",
                url: "/",
              },
              {
                title: "COMPRA YA",
                url: "/",
              },
            ]}
          />,
          <LockBanner
            img={img3}
            label="Cerradura Inteligente"
            title="FREYA19"
            price="$5,270.00"
            actions={[
              {
                title: "CONOCE MÁS",
                url: "/",
              },
              {
                title: "COMPRA YA",
                url: "/",
              },
            ]}
          />,
        ]}
      />
    </div>
    <div className={classes.locksBanner}>
      <Link to="/cerraduras">
        <div>
          <h2>
            Cerraduras Inteligentes <b>SEYO</b>
          </h2>
          <h3>
            Desde <b>$3,580.00</b>
          </h3>
        </div>
        <img src={locks_all} alt="Nuestras Cerraduras" />
      </Link>
    </div>
    <HomeLocks />
    <LockBanner
      img={otros_productos}
      title="Accesorios"
      darkText
      price={
        <Fragment>
          Desde <b>$3,580.00</b>
        </Fragment>
      }
      actions={[
        {
          title: "CONOCE MÁS",
          url: "/",
          blue: true,
        },
      ]}
    />
  </Layout>
)

export default IndexPage
