import React, { useState } from "react"
import classes from "./DiscountBox.module.less"
import hash from "object-hash"
import moment from "moment"
import CODES from "./codes"

export default ({ onDiscount }) => {
  let [code, setCode] = useState("")
  let [error, setError] = useState(null)

  let validateCode = e => {
    e.preventDefault()
    let hashedCode = hash.sha1(code)
    let codeFound = CODES[hashedCode]
    console.log("codigo", code, hashedCode, codeFound)
    if (codeFound && moment().isBefore(moment(codeFound.expiration))) {
      onDiscount({
        code,
        discount: codeFound.discount,
      })
    } else {
      setError("El código no es válido. Intenta de nuevo.")
    }
  }

  console.log("SEGURIDAD15", hash.sha1("SEGURIDAD15"))
  console.log("SEYO10OFF", hash.sha1("SEYO10OFF"))
  console.log("20OFFSEGURIDAD", hash.sha1("20OFFSEGURIDAD"))
  return (
    <div className={classes.container}>
      <p>¿Tienes un cupón? Úsalo ahora:</p>
      <form onSubmit={validateCode}>
        <input value={code} onChange={e => setCode(e.target.value)} />
        <button>Activar</button>
      </form>
      {error ? <p className={classes.error}>{error}</p> : null}
    </div>
  )
}
