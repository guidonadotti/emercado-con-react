import React, { useId } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

function Direccion() {
  return (
    <section>
      <Col md={6}>
        <Form.Group controlId={`calle_${useId()}`}>
          <Form.Label>Calle</Form.Label>
          <Form.Control required type="text" name="calle" />
        </Form.Group>
      </Col>
      <Col md={6}>
        <Form.Group controlId={`numero_${useId()}`}>
          <Form.Label>Número</Form.Label>
          <Form.Control required type="text" name="numero" />
        </Form.Group>
      </Col>

      <Col md={6}>
        <Form.Group controlId={`esquina_${useId()}`}>
          <Form.Label>Esquina</Form.Label>
          <Form.Control required type="text" name="Esquina" />
        </Form.Group>
      </Col>
    </section>
  );
}

export default Direccion;
