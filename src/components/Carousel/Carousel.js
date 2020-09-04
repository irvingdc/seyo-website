import React from "react"
import Carousel from "react-bootstrap/Carousel"

export default ({ items }) => (
  <div>
    <Carousel>
      {items.map((it, index) => (
        <Carousel.Item key={index}>{it}</Carousel.Item>
      ))}
    </Carousel>
  </div>
)
