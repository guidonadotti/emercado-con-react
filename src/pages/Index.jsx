import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../css/jumbotron.css";
import CardIndex from "../components/General/Cards";

const Index = () => {
  return (
    <>
      <div className="jumbotron text-center"></div>
      <div className="album py-5 bg-light">
        <Container>
          <Row className="gy-3">
            <Col md={4}>
              <CardIndex
                name="Autos"
                imgSrc={require("../img/cars_index.jpg")}
                description="Los mejores precios en autos 0 kilómetro, de alta y media gama."
                to="/categories/101"
              />
            </Col>
            <Col md={4}>
              <CardIndex
                name="Juguetes"
                imgSrc={require("../img/toys_index.jpg")}
                description="Encuentra aquí los mejores precios para niños/as de cualquier edad."
                to="/categories/102"
              />
            </Col>

            <Col md={4}>
              <CardIndex
                name="Muebles"
                imgSrc={require("../img/furniture_index.jpg")}
                description="Muebles antiguos, nuevos y para ser armados por uno mismo."
                to="/categories/103"
              />
            </Col>
          </Row>
          <Row>
            <Link className="btn btn-light btn-lg btn-block" to="/categories">
              Y mucho más!
            </Link>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Index;
