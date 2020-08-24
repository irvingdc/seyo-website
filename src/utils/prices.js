import syn19_img from "images/locks/syn/syn.png"
import syf19_img from "images/locks/syf/syf_flipped.png"
import tyr19_img from "images/locks/tyr/tyr.png"
import not19_img from "images/locks/not/not_flipped.png"
import sol19_img from "images/locks/sol/sol.png"
import freya19_img from "images/locks/freya/freya-flipped.png"
import myst19_img from "images/locks/mist19/mist19.png"
import tarjetaRF_img from "images/accesories/tarjeta.png"
import gateway_img from "images/accesories/gateway2.png"

export const LOCKS = {
  SYN19: {
    price: 9300,
    name: "SYN-19",
    image: syn19_img,
    link: "cerraduras/syn19",
  },
  SYF19: {
    price: 8450,
    name: "SYF-19",
    image: syf19_img,
    link: "cerraduras/syf19",
  },
  TYR19: {
    price: 8360,
    name: "TYR-19",
    image: tyr19_img,
    link: "cerraduras/tyr19",
  },
  NOT19: {
    price: 6980,
    name: "NOT-19",
    image: not19_img,
    link: "cerraduras/not19",
  },
  SOL19: {
    price: 5900,
    name: "SOL-19",
    image: sol19_img,
    link: "cerraduras/sol19",
  },
  FREYA19: {
    price: 5270,
    name: "FREYA-19",
    image: freya19_img,
    link: "cerraduras/freya19",
  },
  MIST19: {
    price: 3580,
    name: "MIST-19",
    image: myst19_img,
    link: "cerraduras/mist19",
  },
}

export const ACCESORIES = {
  TARJETAS_RF: {
    price: 90,
    name: "Tarjeta RF",
    image: tarjetaRF_img,
    link: "accesorios/tarjetas-rf",
  },
  GATEWAY: {
    price: 5270,
    name: "Gateway",
    image: gateway_img,
    link: "accesorios/gateway",
  },
}

const flattenPrice = obj => {
  return Object.keys(obj).reduce(
    (acc, currKey) => ({
      ...acc,
      [currKey]: obj[currKey].price,
    }),
    {}
  )
}

export const ACCESORIES_PRICES = flattenPrice(ACCESORIES)

export const LOCK_PRICES = flattenPrice(LOCKS)

export const PRICES = {
  ...ACCESORIES_PRICES,
  ...LOCK_PRICES,
}

export const PRODUCTS = {
  ...ACCESORIES,
  ...LOCKS,
}
