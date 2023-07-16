import React from "react";
import { Carousel } from "react-bootstrap";

function ImagenesIlustrativas({ imagenes = [], name }) {
  return (
    <Carousel as="section">
      {imagenes.map((imgSrc) => (
        <Carousel.Item key={imgSrc}>
          <img
            className="d-block w-100"
            src={require(`../../${imgSrc}`)}
            alt={`Imagen ilustrativa de «${name}»`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ImagenesIlustrativas;
