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
          <Form.Control.Feedback type="invalid">
            Ingrese una calle.
          </Form.Control.Feedback>
        </Form.Group>
      </Col>
      <Col md={6}>
        <Form.Group controlId={`numero_${useId()}`}>
          <Form.Label>Número</Form.Label>
          <Form.Control required type="text" name="numero" />
          <Form.Control.Feedback type="invalid">
            Ingrese un número.
          </Form.Control.Feedback>
        </Form.Group>
      </Col>

      <Col md={6}>
        <Form.Group controlId={`esquina_${useId()}`}>
          <Form.Label>Esquina</Form.Label>
          <Form.Control required type="text" name="esquina" />
          <Form.Control.Feedback type="invalid">
            Ingrese una esquina.
          </Form.Control.Feedback>
        </Form.Group>
      </Col>
    </section>
  );
}

export default Direccion;
