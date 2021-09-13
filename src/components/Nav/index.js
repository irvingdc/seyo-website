import React, { useState } from "react";
import * as classes from "./index.module.less";
import logo from "images/logo.png";
import { Helmet } from "react-helmet"
import Hoverable from "components/Hoverable";
import LinkWithContent from "components/LinkWithContent";
import Layout from "components/WidthLayout";
import { Link } from "gatsby";
import menu from "images/grid.svg";
import close from "images/close.svg";
import Cart from "components/Cart/Cart"
import whatsapp from "images/whatsapp.svg"

export default ({ title, description, canonical }) => {
  let [display, setDisplay] = useState(false);
  let [selected, setSelected] = useState("productos");

  let handleSelection = (val) => {
    setSelected(val);
  };
  return (
    <>
      <div
        className={[classes.container, display ? classes.notBlurred : ""].join(
          " "
        )}
      >
        {title ? (
          <Helmet>
            <meta charSet="utf-8" />
            <title>{title}</title>
            <link rel="canonical" href={`https://seyo.mx${canonical}`} />
            <html lang="es" />
            <meta name="description" content={description} />

            <meta
              property="og:image"
              content={`http://${typeof window !== "undefined" ? window.location.hostname : "seyo.mx"
                }/locks.jpg`}
            />
            <meta
              property="og:image:secure_url"
              content={`https://${typeof window !== "undefined" ? window.location.hostname : "seyo.mx"
                }/locks.jpg`}
            />
          </Helmet>
        ) : null}
        <Layout>
          <span className={classes.menuButton}>
            {!display ? (
              <img src={menu} alt="Menu Icon" onClick={() => setDisplay(true)} />
            ) : null}
            {display ? (
              <img
                src={close}
                alt="Close Icon"
                onClick={() => setDisplay(false)}
              />
            ) : null}
          </span>
          <Link to="/" className={classes.mainIcon}>
            <img src={logo} alt="logo" />
          </Link>
          <div
            className={[classes.content, display ? classes.displayed : ""].join(
              " "
            )}
          >
            <Hoverable
              selected={selected}
              title="Productos"
              identifier="productos"
              onChangeSelect={handleSelection}
            >
              <LinkWithContent to="/cerraduras" title="Cerraduras Inteligentes"></LinkWithContent>
              <LinkWithContent to="/kits-de-automatizacion" title="Kits de Automatización"></LinkWithContent>
              <LinkWithContent to="/otros-productos" title="Accesorios"></LinkWithContent>
            </Hoverable>

            <Hoverable
              selected={selected}
              title="Soporte"
              identifier="soporte"
              onChangeSelect={handleSelection}
            >
              <LinkWithContent to="/soporte" title="Recursos de instalación"></LinkWithContent>
              <LinkWithContent to="/soporte/app/manual.pdf" title="Configura tu app"></LinkWithContent>
            </Hoverable>
            <Hoverable
              selected={selected}
              title="Acerca De"
              identifier="acerca"
              onChangeSelect={handleSelection}
            >
              <LinkWithContent to="/nosotros" title="Nosotros">
              </LinkWithContent>
              <LinkWithContent to="/comunidad" title="Comunidad">
              </LinkWithContent>
              <LinkWithContent to="/distribuidores" title="Distribuidores">
              </LinkWithContent>
            </Hoverable>
          </div>
          <Cart />
        </Layout>
      </div>
      <a
        href="https://api.whatsapp.com/send?phone=+5212215985710&text=Estoy%20interesado%20en%20sus%20productos."
        rel="noopener noreferrer"
        className={classes.whatsapp}
        target="_blank"
      >
        <img src={whatsapp} alt="Whatsapp Icon" />
      </a>
    </>
  );
};
