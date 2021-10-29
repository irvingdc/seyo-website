import React, { useEffect, useState, lazy } from "react"
import classes from "stylesheets/ruleta.module.less"
import "stylesheets/main.module.less"
import Layout from "components/Layout/Layout"
import { navigate } from "gatsby-link"
import Suspense from "components/Suspense/Suspense"

const AsyncWheel = lazy(() => import("components/AsyncWheel/AsyncWheel"))

const prizes = [
  "¡Te ganaste un agua!",
  "Di no al covid: KN95",
  "¡Te ganaste una pluma!",
  "¡para la proxima!",
  "¡Te ganaste un dulce!",
  "¡uff casi!",
]

export default () => {
  const [mustSpin, setMustSpin] = useState(false)
  const [prizeNumber, setPrizeNumber] = useState(0)
  const [showPrize, setShowPrize] = useState(false)

  useEffect(() => {
    readEmail()
  }, [])

  let readEmail = () => {
    if (typeof window === "undefined") {
      return
    }
    if (!window.localStorage.habitatEmailBuenFin) {
      setTimeout(() => navigate("/"), 500)
    } else if (window.localStorage.prizeNumberBuenFin) {
      setPrizeNumber(parseInt(window.localStorage.prizeNumberBuenFin))
      setShowPrize(true)
    }
  }

  const handleSpinClick = () => {
    if (typeof window === "undefined" || showPrize || mustSpin) {
      return
    }
    const newPrizeNumber = Math.floor(Math.random() * prizes.length)
    setPrizeNumber(newPrizeNumber)
    window.localStorage.prizeNumberBuenFin = newPrizeNumber
    setMustSpin(true)
  }

  const data = [
    { option: "¡Te ganaste un agua!" },
    { option: "Di no al covid: KN95" },
    { option: "¡Te ganaste una pluma!" },
    { option: "¡para la proxima!" },
    { option: "¡Te ganaste un dulce!" },
    { option: "¡uff casi!" },
  ]

  const isSSR = typeof window === "undefined"

  return (
    <Layout
      title="Seyo | ¡Participa y gana con Seyo!"
      description=""
      canonical="/gana-con-seyo/"
    >
      <div className={classes.container}>
        <h1>¡Participa y gana con Seyo!</h1>
        <div className={classes.content}>
          <button
            disabled={showPrize}
            className="small-button-blue-pill"
            onClick={handleSpinClick}
          >
            ¡Girar Ahora!
          </button>
          <div className={classes.roulette}>
            <Suspense>
              <AsyncWheel
                mustStartSpinning={mustSpin}
                prizeNumber={prizeNumber}
                data={data}
                backgroundColors={["#dbf0f9", "whitesmoke"]}
                onStopSpinning={() => {
                  setMustSpin(false)
                  setShowPrize(true)
                }}
                outerBorderWidth={10}
                outerBorderColor="#008fc7"
                innerBorderColor="#008fc7"
                innerRadius={5}
                innerBorderWidth={5}
                radiusLineWidth={0}
                fontSize={16}
                textDistance={50}
                textColors={["#008fc7"]}
              />
            </Suspense>
          </div>
          <div
            className={[
              classes.prize,
              showPrize ? classes.prizeDisplayed : "",
            ].join(" ")}
          >
            <h2>{prizes[prizeNumber]}</h2>
          </div>
        </div>
      </div>
    </Layout>
  )
}
