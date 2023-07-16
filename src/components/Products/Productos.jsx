import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../contexts/ProductsContexts";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Producto({
  name,
  description,
  cost,
  currency,
  soldCount = 0,
  image,
  to = "",
  imgAlt = `Imagen ilustrativa de «${name}»`,
}) {
  return (
    <Link to={to}>
      <Card>
        <Card.Img
          variant="top"
          src={require(`../../${image}`)}
          alt={imgAlt}
        ></Card.Img>
        <Card.Body>
          <Card.Title as="h5">{name}</Card.Title>
          <Card.Title as="h5">{`${currency} ${cost}`}</Card.Title>
          <Card.Text>
            <small className="text-muted">{description}</small>
            <br />
            <small>
              {soldCount} unidad{soldCount !== 1 ? "es" : ""} vendida
              {soldCount !== 1 ? "s" : ""}
            </small>
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}

function Productos() {
  const { productosArray, filters } = useContext(ProductsContext);
  return (
    <Row as="section" className="gy-3">
      {productosArray
        .filter(({ cost, name, description }) => {
          const campoABuscar = (name + description).toLowerCase();
          const { busqueda, min, max } = filters;
          return (
            cost >= min &&
            cost <= max &&
            campoABuscar.includes(busqueda.toLowerCase())
          );
        })
        .map(({ id, name, ...props }) => {
          return (
            <Col as="article" md={6} lg={4} key={`${name}_${id}`}>
              <Producto to={`/producto/${id}`} name={name} {...props} />
            </Col>
          );
        })}
    </Row>
  );
}

export default Productos;
