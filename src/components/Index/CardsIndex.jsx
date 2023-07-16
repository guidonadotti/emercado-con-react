import React from "react";
import "../../css/CardsIndex.css"
import { Link } from "react-router-dom";
import Col  from "react-bootstrap/Col";


const CardsIndex = ({ nombre, imagen, descripcion,to="" }) => {
  return (
    <Col>
      <Link className="card-index" to={to}>
        <div
          className="card mb-4 shadow-sm custom-card cursor-active list-group-item-action"
          id={nombre}
        >
          <img
            className="bd-placeholder-img card-img-top"
            src={imagen}
            alt="Imagen representativa de la categoría 'Autos'"
          />
          <h3 className="m-3">{nombre}</h3>
          <div className="card-body">
            <p className="card-text">{descripcion}</p>
          </div>
        </div>
      </Link>
    </Col>
  );
};

export default CardsIndex;
