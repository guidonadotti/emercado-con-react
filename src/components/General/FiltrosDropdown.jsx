import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import { AiFillFilter as BtnFiltrar } from "react-icons/ai";

function FiltrosDropdown({ children }) {
  return (
    <Row as="section">
      <Col className="text-end">
        <Dropdown>
          <Dropdown.Toggle variant="ligth">
            <BtnFiltrar /> Filtrar
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Container className="pb-2">{children}</Container>
          </Dropdown.Menu>
        </Dropdown>
      </Col>
    </Row>
  );
}

export default FiltrosDropdown;
