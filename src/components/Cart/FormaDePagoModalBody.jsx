import React, { useContext, useId, useState } from "react";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { CartContext } from "../../contexts/CartContext";

function FormaDePagoModalBody() {
  const [checked, setChecked] = useState("");
  const [numeroTarjeta, setNumeroTarjeta] = useState("");
  const { setFormaDePago, formID } = useContext(CartContext);

  function handleChange(e) {
    const inputText = e.target.value.replace(/\s/g, ""); // Elimina espacios en blanco
    const formattedText = inputText.replace(/(\d{4})/g, "$1 ").trim(); // Agrega espacios cada 4 dígitos

    setNumeroTarjeta(formattedText);
  }
  return (
    <>
      <Form.Check
        required
        form={formID}
        type="radio"
        name="pago"
        id={`tarjeta_${useId()}`}
        label="Tarjeta de Crédito"
        value="tarjeta"
        checked={checked === "tarjeta"}
        onChange={(e) => {
          setChecked(e.target.value);
          setFormaDePago("Tarjeta de Crédito");
        }}
      />
      <Row as="section" className="mt-1 p-2">
        <Form.Group as={Col} md="6" controlId={`numero_${useId()}`}>
          <Form.Label>Número de tarjeta</Form.Label>
          <Form.Control
            form={formID}
            type="text"
            placeholder="XXXX XXXX XXXX XXXX"
            required
            disabled={checked !== "tarjeta"}
            value={numeroTarjeta}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group as={Col} md="6" controlId={`codigo_${useId()}`}>
          <Form.Label>Código de seguridad</Form.Label>
          <Form.Control
            form={formID}
            type="text"
            placeholder="XXX"
            required
            disabled={checked !== "tarjeta"}
            pattern="\d{3}"
          />
        </Form.Group>
        <Form.Group as={Col} md="6" controlId={`vencimiento_${useId()}`}>
          <Form.Label>Vencimiento </Form.Label>
          <Form.Control
            form={formID}
            type="text"
            placeholder="MM/AA"
            required
            disabled={checked !== "tarjeta"}
            pattern="^(0[1-9]|1[0-2])\/(2[2-9]|[3-9][0-9])$"
          />
        </Form.Group>
      </Row>
      <hr />
      <Form.Check
        required
        form={formID}
        type="radio"
        name="pago"
        id={`banco_${useId()}`}
        label="Transferencia bancaria"
        value="banco"
        checked={checked === "banco"}
        onChange={(e) => {
          setChecked(e.target.value);
          setFormaDePago("Transferencia bancaria");
        }}
      />

      <Row as="section" className="mt-1 p-2">
        <Form.Group as={Col} md="6" controlId={`vencimiento_${useId()}`}>
          <Form.Label>Número de Cuenta</Form.Label>
          <Form.Control
            name="numeroDeCuenta"
            form={formID}
            type="text"
            placeholder=""
            required
            disabled={checked !== "banco"}
          />
        </Form.Group>
      </Row>
    </>
  );
}

export default FormaDePagoModalBody;
