import React from "react";
import { useMediaQuery } from "react-responsive";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import BotonoesOrdenar from "../components/Categories/BotonoesOrdenar";
import Categorias from "../components/Categories/Categorias";
import CategoriesMainCabecera from "../components/Categories/CategoriesMainCabecera";
import Filtrar from "../components/Categories/Filtrar";
import { lg } from "../utils/bootstrapBreakpoints";

import "../css/Categories.css";
import FiltrosDropdown from "../components/General/FiltrosDropdown";
import useWindowTitle from "../hooks/useWindowTitle";

const Categories = () => {
  useWindowTitle({ windowTitle: "Categorías" });
  const isLarge = useMediaQuery({ minWidth: lg });

  return (
    <main className="pb-5">
      <CategoriesMainCabecera />
      <Container fluid={isLarge}>
        <BotonoesOrdenar />
        {!isLarge && (
          <FiltrosDropdown>
            <Filtrar />
          </FiltrosDropdown>
        )}
        <Row>
          {isLarge && (
            <Col as="aside" xs="2">
              <Filtrar />
            </Col>
          )}
          <Col>
            <Categorias />
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Categories;
