import React from "react"
import Carousel from "react-bootstrap/Carousel"

export default ({ items }) => (
  <div>
    <Carousel>
      {items.map(it => (
        <Carousel.Item>{it}</Carousel.Item>
      ))}
    </Carousel>
  </div>
)
