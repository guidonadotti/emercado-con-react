import React, { useContext, useState } from "react";
import { Button, ButtonGroup, Col, Form, Row } from "react-bootstrap";
import Estrellas from "./Estrellas";
import { EstrellasContext } from "../../contexts/EstrellasContext";
import { useParams } from "react-router-dom";

function IngresarComentario({ productName = "producto" }) {
  const { id } = useParams();
  const [text, setText] = useState("");
  const { chequeado, setChequeado } = useContext(EstrellasContext);

  const handleInputChange = (event) => {
    setText(event.target.value);
    event.target.style.height = "auto";
    event.target.style.height = event.target.scrollHeight + "px";
  };
  function handleSubmit(e) {
    e.preventDefault();
    const datos = Object.fromEntries(new FormData(e.target));
    console.log(datos);

    const datosComentario = {
      producto: id,
    };

    setText("");
    setChequeado("");
  }

  return (
    <Form noValidate onSubmit={handleSubmit}>
      <Row>
        <Col md="8">
          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              placeholder={`El ${productName} me pareció...`}
              required
              rows={2}
              value={text}
              onChange={handleInputChange}
              style={{ resize: "none", overflow: "hidden" }}
              name="comentario"
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md="8">
          <Estrellas name="estrellas" />
        </Col>
      </Row>
      <ButtonGroup>
        <Button disabled={chequeado == "" || text.trim() == ""} type="submit">
          Enviar
        </Button>
        <Button
          disabled={chequeado == "" && text == ""}
          onClick={() => {
            setText("");
            setChequeado("");
          }}
          variant="ligth"
        >
          Cancelar
        </Button>
      </ButtonGroup>
    </Form>
  );
}

export default IngresarComentario;
