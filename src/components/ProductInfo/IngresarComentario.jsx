import React, { useContext, useEffect, useState } from "react";
import { Button, ButtonGroup, Col, Form, Row } from "react-bootstrap";
import Estrellas from "./Estrellas";
import { EstrellasContext } from "../../contexts/EstrellasContext";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductContext";
import { LoginContext } from "../../contexts/LoginContext";
import gender from "gender-es";
import mayusculas from "../../utils/mayusculas";

function formatDateToYYYYMMDDHHMMSS(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

function IngresarComentario() {
  const { id } = useParams();
  const [text, setText] = useState("");
  const { chequeado, setChequeado } = useContext(EstrellasContext);
  const {
    producto: { name = "producto" },
    setComentarios,
    comentarios,
  } = useContext(ProductContext);
  const { user, getActiveUsername } = useContext(LoginContext);
  useEffect(() => console.log(comentarios), [comentarios]);
  const handleInputChange = (event) => {
    setText(event.target.value);
    event.target.style.height = "auto";
    event.target.style.height = event.target.scrollHeight + "px";
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (!user) {
      alert("Tiene que estar logueado para comentar");
      return;
    }

    const datosComentario = {
      product: parseInt(id),
      score: parseInt(chequeado),
      description: text.trim(),
      user: getActiveUsername({ email: user }),
      dateTime: formatDateToYYYYMMDDHHMMSS(new Date()),
    };

    setComentarios((prevState) => [...prevState, datosComentario]);
    console.log(datosComentario);

    setText("");
    setChequeado("");
  }
  const el_la = mayusculas(gender.definiteArticle(name.split(" ")[0]));

  return (
    <Form noValidate onSubmit={handleSubmit}>
      <Row>
        <Col md="8">
          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              placeholder={`${el_la} ${name} me pareció...`}
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
