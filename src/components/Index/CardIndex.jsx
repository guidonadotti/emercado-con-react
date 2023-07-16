import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const CardIndex = ({
  name,
  imgSrc,
  description,
  productCount = "",
  to = "",
}) => {
  return (
    <Link to={to}>
      <Card>
        <Card.Img variant="top" src={require(`../../${imgSrc}`)}></Card.Img>
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
};

export default CardIndex;
