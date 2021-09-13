import React from "react"
import "stylesheets/main.module.less"
import classes from "stylesheets/accesories.module.less"
import Layout from "components/Layout/Layout"
import LockBanner from "components/LockBanner/LockBanner"
import { getPriceString } from "utils/functions"
import LockCard from "components/LockCard/LockCard"
import syn from "images/locks/syn/syn_alt.png"
import tyr from "images/locks/tyr/tyr_alt.png"
import Carousel from "components/Carousel/Carousel"
import { addToCart } from "components/Cart/Cart"
import banner1 from "images/accesories/KIT_GOOGLE_SYN21/banner.jpg"
import banner2 from "images/accesories/KIT_GOOGLE_TYR21/banner.jpg"

export default () => (
    <Layout
        title="Seyo | Kits de Automatización"
        description="Da un paso más hacia la automatización doméstica."
        canonical="/kits-de-automatizacion/"
    >
        <div className={classes.container}>

            <div>
                <h1>Kits de Automatización</h1>
                <Carousel
                    items={[
                        <LockBanner
                            img={banner1}
                            title={<ul>
                                <li>Cerradura SYN21</li>
                                <li>Google Nest Mini</li>
                                <li>Gateway</li>
                                <li>Envío Gratis</li>
                            </ul>}
                            price={getPriceString("KIT_GOOGLE_SYN21")}
                            actions={[
                                {
                                    title: "CONOCE MÁS",
                                    url: "/otros-productos/kit-google-syn21/",
                                },
                            ]}
                        />,
                        <LockBanner
                            img={banner2}
                            title={<ul>
                                <li>Cerradura TYR21</li>
                                <li>Google Nest Mini</li>
                                <li>Gateway</li>
                                <li>Envío Gratis</li>
                            </ul>}
                            price={getPriceString("KIT_GOOGLE_TYR21")}
                            actions={[
                                {
                                    title: "CONOCE MÁS",
                                    url: "/otros-productos/kit-google-tyr21/",
                                },
                            ]}
                        />,
                    ]}
                />
            </div>
            <h2>
                Protege lo que más te importa con <b>SEYO</b>.
            </h2>
            <div className={classes.allLocks}>
                <LockCard
                    subtitle="Kit De Apertura Remota"
                    link="/otros-productos/kit-google-syn21/"
                    direction="left"
                    title="Google Home + SYN21"
                    img={syn}
                    price={getPriceString("KIT_GOOGLE_SYN21")}
                    methods={[]}
                />
                <LockCard
                    subtitle="Kit De Apertura Remota"
                    link="/otros-productos/kit-google-tyr21/"
                    direction="right"
                    title="Google Home + TYR21"
                    img={tyr}
                    price={getPriceString("KIT_GOOGLE_TYR21")}
                    methods={[]}
                />
            </div>
        </div>
    </Layout>
)
