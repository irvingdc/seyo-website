import React from "react"
import classes from "stylesheets/support.module.less"
import "stylesheets/main.module.less"
import banner from "images/support/banner.jpg"
import Layout from "components/Layout/Layout"
import PreHeader from "components/PreHeader/PreHeader"
import ContactForm from "components/ContactForm/ContactForm"
import Resources from "components/Resources/Resources2"

export default () => (
  <Layout>
    <div className={classes.container}>
      <PreHeader type="h2" />
      <h1>SOPORTE</h1>
      <img src={banner} alt="Banner" />
      <div className={classes.text}>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euis- mod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <h5>RECURSOS</h5>
      <Resources />
      <h5>CONTÁCTANOS</h5>
      <ContactForm />
    </div>
  </Layout>
)
