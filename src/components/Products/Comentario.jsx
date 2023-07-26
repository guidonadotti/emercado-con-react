import React from "react";
import { Row } from "react-bootstrap";
import { BsStar as Star, BsStarFill as StarFill } from "react-icons/bs";

function Comentario({ dateTime, description, score, user, ...props }) {
  return (
    <Row as="article" {...props}>
      <div className="d-flex justify-content-between">
        <h4>
          <b>@{user}</b>
        </h4>
        <span className="text-muted number">{dateTime}</span>
      </div>
      <p className="my-2">{description}</p>
      <span>
        {[...Array(score)].map((_, index) => (
          <StarFill
            style={{ color: "gold" }}
            key={`${user}_${dateTime}_estrella_llena_${index}`}
          />
        ))}

        {[...Array(5 - score)].map((_, index) => (
          <Star key={`${user}_${dateTime}_estrella_vacia_${index}`} />
        ))}
      </span>
    </Row>
  );
}

export default Comentario;
