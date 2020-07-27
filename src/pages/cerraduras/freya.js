import React, { useEffect } from "react"
import "stylesheets/main.module.less"
import classes from "stylesheets/singleLock.module.less"
import Nav from "components/Nav/Nav"
import freya from "images/locks/freya/freya-flipped.png"
import code_opening_far from "images/people/unlocking_code_far.jpg"
import using_phone from "images/people/using_phone.jpg"
import plain_using from "images/people/plain_using.jpg"
import phone_app from "images/assets/phone_app.png"
import structure from "images/assets/structure.png"
import fingerprint from "images/icons/finger.png"
import wifi from "images/icons/wifi-hex.png"
import phone from "images/icons/phone-hex.png"
import code from "images/icons/code.png"

export default () => {
  useEffect(() => {
    window.firstFloorAnimated = false
    window.messagesAnimated = false
    window.linesAnimated = false
    let messagesTriggerPoint = getTriggerPoint("message1", 100)
    let appTriggerPoint = getTriggerPoint("phoneImage", -100)
    let textLinePoint = getTriggerPoint("textLine1", 100)
    window.addEventListener("scroll", _ => {
      let scroll = window.scrollY
      handleAppScroll(appTriggerPoint, scroll)
      handleScrollMessages(messagesTriggerPoint, scroll)
      handleTextLine(textLinePoint, scroll)
    })
  }, [])

  let getTriggerPoint = (id, offset) => {
    return (
      document.getElementById(id).getBoundingClientRect().top -
      window.innerHeight +
      offset
    )
  }

  function handleAppScroll(triggerPoint, scroll) {
    console.log("handleAppScroll", triggerPoint, scroll)
    if (scroll > triggerPoint && !window.firstFloorAnimated) {
      window.firstFloorAnimated = true
      setTimeout(() => {
        document.getElementById("phoneImage").classList.add("phoneDisplayed")
      }, 500)
    }
  }

  function handleScrollMessages(triggerPoint, scroll) {
    if (scroll > triggerPoint && !window.messagesAnimated) {
      window.messagesAnimated = true
      document.getElementById("message1").classList.add("messageDisplayed")
      setTimeout(() => {
        document.getElementById("message2").classList.add("messageDisplayed")
      }, 1000)
      setTimeout(() => {
        document.getElementById("message3").classList.add("messageDisplayed")
      }, 2000)
    }
  }

  function handleTextLine(triggerPoint, scroll) {
    if (scroll > triggerPoint && !window.linesAnimated) {
      window.linesAnimated = true
      document.getElementById("textLine1").classList.add("textLineDisplayed")
      setTimeout(() => {
        document.getElementById("textLine2").classList.add("textLineDisplayed")
      }, 1000)
      setTimeout(() => {
        document.getElementById("textLine3").classList.add("textLineDisplayed")
      }, 2000)
    }
  }

  return (
    <div className={classes.container}>
      <Nav />
      <div className={classes.introContainer}>
        <div>
          <h1>FREYA19</h1>
          <p>
            Cerradura de alta seguridad para proteger a quienes más quieres.
          </p>
          <label>
            Por solo <b>$5,270.00</b>
          </label>
          <button>Comprar Ahora</button>
        </div>
        <img src={freya} alt="" />
      </div>
      <div className={classes.fingerPrint}>
        <div className={classes.introText}>
          <h2>
            <img src={fingerprint} className={classes.icon} />
            Acceso con <b>huella dactilar</b>
          </h2>
          <p>
            Olvídate de andar cargando llaves en tu bolsillo, registra la
            cantidad de huellas que necesites desde tu app movil y manten
            siempre el control. <b>Solo tú decides quien puede entrar.</b>
          </p>
        </div>
        <div className={classes.image}></div>
      </div>
      <div className={classes.remoteCode}>
        <div className={classes.leftImage}>
          <img src={using_phone} alt="" />
          <div className={classes.messages}>
            <span className={classes.left} id="message1">
              Ya llegamos, ¿Podrías abrir?
            </span>
            <span className={classes.right} id="message2">
              Salí a correr pero les he generado el código de acceso{" "}
              <b>081937</b>
            </span>
            <span className={classes.left} id="message3">
              ¡Mil gracias!
            </span>
          </div>
        </div>
        <div className={classes.text}>
          <h2>
            <img src={code} className={classes.icon} />
            <b>Códigos</b> de acceso
          </h2>
          <p>
            Genera cuantos códigos necesites, programa sus permisos de uso desde
            tu app movil y compartelos de manera ilimitada.
            <br />
            <b>Tú eliges durante cuanto tiempo son válidos.</b>
          </p>
        </div>
        <div className={classes.bottomImage}>
          <img src={code_opening_far} alt="" />
        </div>
      </div>
      <div className={classes.phoneAccess}>
        <div className={classes.content}>
          <div className={classes.text}>
            <h2>
              Apertura <b>local y remota</b> por app
            </h2>
            <p>
              <img src={phone} alt="" />
              <span>
                Utiliza tu aplicación para aperturar tu cerradura via bluetooth
                (en un radio de hasta 2 metros) y recibe notificaciónes en
                tiempo real de sus uso.
              </span>
            </p>
            <p>
              <img src={wifi} alt="" />
              <span>
                Utiliza conectividad a internet para aperturar tu cerradura
                inteligente y recibe notificiaciones en tiempo real de su uso en
                cualquier parte del mundo.
              </span>
            </p>
          </div>
        </div>
        <img src={phone_app} alt="" id="phoneImage" />
        <div className={classes.image}>
          <img src={plain_using} alt="" />
        </div>
      </div>
      <div className={classes.structure}>
        <h2>
          Mecanismos con <b>alto nivel de seguridad</b>
        </h2>
        <div className={classes.images}>
          <img src={structure} alt="" />
          <div className={classes.textLine1} id="textLine1">
            <span></span>
            <h4>Pestillo automático</h4>
          </div>
          <div className={classes.textLine2} id="textLine2">
            <span></span>
            <h4>Anti-tarjetas</h4>
          </div>
          <div className={classes.textLine3} id="textLine3">
            <span></span>
            <h4>Bulón de seguridad</h4>
          </div>
        </div>
      </div>
      <div className={classes.contact}>
        <h2>
          Lorem <b>ipsum?</b> Lorem ipsum.
        </h2>
      </div>
    </div>
  )
}
