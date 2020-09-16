import syn19_img from "images/locks/syn/syn.png"
import syf19_img from "images/locks/syf/syf_flipped.png"
import tyr19_img from "images/locks/tyr/tyr.png"
import not19_img from "images/locks/not/not_flipped.png"
import sol19_img from "images/locks/sol/sol.png"
import freya19_img from "images/locks/freya/freya-flipped.png"
import myst19_img from "images/locks/mist19/mist19.png"
import tarjetaRF_img from "images/accesories/tarjeta.png"
import gateway_img from "images/accesories/gateway2.png"
import frigg_img from "images/accesories/FRIGG/frigg_small.png"
import balder_img from "images/accesories/BALDER/balder_small.png"

export const LOCKS = {
  SYN19: {
    price: 9300,
    name: "SYN-19",
    image: syn19_img,
    link: "/cerraduras/syn19",
    manual: "/soporte/syn/manual.pdf",
    template: "/soporte/syn/plantilla.pdf",
  },
  SYF19: {
    price: 8450,
    name: "SYF-19",
    image: syf19_img,
    link: "/cerraduras/syf19",
    manual: "/soporte/syf/manual.pdf",
    template: "/soporte/syf/plantilla.pdf",
  },
  TYR19: {
    price: 8360,
    name: "TYR-19",
    image: tyr19_img,
    link: "/cerraduras/tyr19",
    manual: "/soporte/tyr/manual.pdf",
    template: "/soporte/tyr/plantilla.pdf",
  },
  NOT19: {
    price: 6980,
    name: "NOT-19",
    image: not19_img,
    link: "/cerraduras/not19",
    manual: "/soporte/not/manual.pdf",
    template: "/soporte/not/plantilla.pdf",
  },
  SOL19: {
    price: 5900,
    name: "SOL-19",
    image: sol19_img,
    link: "/cerraduras/sol19",
    manual: "/soporte/sol/manual.pdf",
    template: "/soporte/sol/plantilla.pdf",
  },
  FREYA19: {
    price: 5270,
    name: "FREYA-19",
    image: freya19_img,
    link: "/cerraduras/freya19",
    template: "/soporte/freya/plantilla.pdf",
    manual: "/soporte/freya/manual.pdf",
  },
  MIST19: {
    price: 3580,
    name: "MIST-19",
    image: myst19_img,
    link: "/cerraduras/mist19",
    template: "/soporte/mist/plantilla.pdf",
    manual: "/soporte/mist/manual.pdf",
  },
}

export const ACCESORIES = {
  TARJETAS_RF: {
    price: 90,
    name: "Tarjeta RF",
    image: tarjetaRF_img,
    link: "otros-productos/tarjetas-rf",
  },
  GATEWAY: {
    price: 5270,
    name: "Gateway",
    image: gateway_img,
    link: "/otros-productos/gateway",
    manual: "/soporte/gateway/manual.pdf",
  },
  BALDER: {
    price: 5270,
    name: "Balder",
    image: balder_img,
    link: "/otros-productos/balder",
    manual: "/soporte/balder/manual.pdf",
  },
  FRIGG: {
    price: 5270,
    name: "Frigg",
    image: frigg_img,
    link: "/otros-productos/frigg",
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
