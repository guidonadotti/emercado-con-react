import React, { useContext } from "react";
import { useMediaQuery } from "react-responsive";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Cabecera from "../components/Products/ProductsMainCabecera";
import BotonesOrdenar from "../components/Products/BotonesOrdenar";
import Filtros from "../components/Products/Filtros";
import FiltrosDropdown from "../components/General/FiltrosDropdown";
import Productos from "../components/Products/Productos";

import { ProductsContext } from "../contexts/ProductsContexts";
import { lg } from "../utils/bootstrapBreakpoints";
import SpinnerCentrado from "../components/SpinnerCentrado";
import useWindowTitle from "../hooks/useWindowTitle";

function Products() {
  const { productos, isLoading } = useContext(ProductsContext);
  const isLarge = useMediaQuery({ minWidth: lg });
  useWindowTitle({ windowTitle: productos?.catName || "Productos" });
  return (
    <>
      <Cabecera categoria={productos?.catName} />
      <Container fluid={isLarge}>
        <BotonesOrdenar />
        {!isLarge && (
          <FiltrosDropdown>
            <Filtros />
          </FiltrosDropdown>
        )}
        <Row>
          {isLarge && (
            <Col as="aside" xs="2">
              <Filtros />
            </Col>
          )}
          <Col as="main">
            {isLoading && <SpinnerCentrado />}
            <Productos />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Products;
