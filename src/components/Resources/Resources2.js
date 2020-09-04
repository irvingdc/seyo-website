import React, { useState } from "react"
import classes from "./Resources.module.less"
import app from "images/support/app.jpg"
import manual from "images/support/manual.jpg"
import plantillas from "images/support/plantillas.jpg"
import Modal from "react-bootstrap/Modal"

let plantillasList = [
  {
    title: "FREYA",
    url: "/soporte/freya/plantilla.pdf",
  },
  {
    title: "MIST",
    url: "/soporte/mist/plantilla.pdf",
  },
  {
    title: "NOT",
    url: "/soporte/not/plantilla.pdf",
  },
  {
    title: "SOL",
    url: "/soporte/sol/plantilla.pdf",
  },
  {
    title: "SYF",
    url: "/soporte/syf/plantilla.pdf",
  },
  {
    title: "SYN",
    url: "/soporte/syn/plantilla.pdf",
  },
  {
    title: "TYR",
    url: "/soporte/tyr/plantilla.pdf",
  },
]

let manualesList = [
  {
    title: "FREYA",
    url: "/soporte/freya/manual.pdf",
  },
  {
    title: "BALDER",
    url: "/soporte/balder/manual.pdf",
  },
  {
    title: "GATEWAY",
    url: "/soporte/gateway/manual.pdf",
  },
  {
    title: "MIST",
    url: "/soporte/mist/manual.pdf",
  },
  {
    title: "NOT",
    url: "/soporte/not/manual.pdf",
  },
  {
    title: "SOL",
    url: "/soporte/sol/manual.pdf",
  },
  {
    title: "SYF",
    url: "/soporte/syf/manual.pdf",
  },
  {
    title: "SYN",
    url: "/soporte/syn/manual.pdf",
  },
  {
    title: "TYR",
    url: "/soporte/tyr/manual.pdf",
  },
]

export default () => {
  const [showPlantillas, setShowPlantillas] = useState(false)
  const [showManuales, setShowManuales] = useState(false)
  return (
    <div className={classes.container}>
      <Modal show={showPlantillas} onHide={() => setShowPlantillas(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Plantillas</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={classes.linksGrid}>
            {plantillasList.map((it, index) => (
              <a href={it.url} target="_blank" key={index}>
                {it.title}
              </a>
            ))}
          </div>
        </Modal.Body>
      </Modal>

      <Modal show={showManuales} onHide={() => setShowManuales(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Manuales</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={classes.linksGrid}>
            {manualesList.map((it, index) => (
              <a key={index} href={it.url} target="_blank">
                {it.title}
              </a>
            ))}
          </div>
        </Modal.Body>
      </Modal>

      <div className={classes.flex2}>
        <span onClick={() => setShowManuales(true)}>
          <img src={manual} alt="manual" />
        </span>
        <span onClick={() => setShowPlantillas(true)}>
          <img src={plantillas} alt="plantillas" />
        </span>
        <a
          rel="noopener noreferrer"
          href="/soporte/app/manual.pdf"
          target="_blank"
        >
          <img src={app} alt="app" />
        </a>
      </div>
    </div>
  )
}
