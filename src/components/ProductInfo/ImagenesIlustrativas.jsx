import React, { useContext } from "react";
import { Carousel } from "react-bootstrap";
import { ProductContext } from "../../contexts/ProductContext";

function ImagenesIlustrativas() {
  const {
    producto: { images = [], name },
  } = useContext(ProductContext);
  return (
    <Carousel as="section">
      {images.map((imgSrc) => (
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
