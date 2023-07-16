import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "../../css/CardsPersonalizadas.css";

function CardPersonalizada({
  name,
  imgSrc,
  description = "",
  productCount = "",
  to = "",
  imgAlt = `Imagen ilustrativa de ${name}`,
}) {
  return (
    <Link to={to}>
      <Card>
        <Card.Img variant="top" src={imgSrc} alt={imgAlt}></Card.Img>
        <Card.Body>
          <Card.Title className="d-flex justify-content-between">
            <span>{name}</span>
            {productCount !== "" ? (
              <small className="text-muted">
                {productCount} artículo{productCount !== 1 ? "s" : ""}
              </small>
            ) : (
              ""
            )}
          </Card.Title>
          <Card.Text>
            <small className="text-muted">{description}</small>
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default CardPersonalizada;
