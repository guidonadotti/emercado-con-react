import React, { useContext, useEffect, useId, useState } from "react";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { CartContext } from "../../contexts/CartContext";
import { PagoContext } from "../../contexts/PagoModalBodyContext";

function FormaDePagoModalBody() {
  const { setFormaDePago, formID } = useContext(CartContext);

  const { formaDePagoCheck, setFormaDePagoCheck, hooksTarjeta, hooksBanco } =
    useContext(PagoContext);
  const { numeroTarjetaInput, numeroSeguridadInput, vencimientoInput } =
    hooksTarjeta;
  const { numeroCuentaBancariaInput } = hooksBanco;

  const forma_de_pago = `forma_de_pago_${useId()}`;

  return (
    <>
      <Form.Check
        required
        type="radio"
        name={forma_de_pago}
        id={`tarjeta_${useId()}`}
        label="Tarjeta de Crédito"
        value="tarjeta"
        checked={formaDePagoCheck === "tarjeta"}
        onChange={(e) => {
          setFormaDePagoCheck(e.target.value);
          setFormaDePago("Tarjeta de Crédito");
        }}
      />
      <Row as="section" className="mt-1 p-2">
        <Form.Group as={Col} md="6" controlId={`numero_${useId()}`}>
          <Form.Label>Número de tarjeta</Form.Label>
          <Form.Control
            className="number"
            type="text"
            name="numero_de_tarjeta"
            placeholder="XXXX XXXX XXXX XXXX"
            pattern="(?:\d{4} ){3}\d{4}"
            title="Por favor, ingrese un número de tarjeta válido"
            maxLength={19}
            required
            disabled={formaDePagoCheck !== "tarjeta"}
            {...numeroTarjetaInput}
          />
        </Form.Group>
        <Form.Group as={Col} md="6" controlId={`codigo_${useId()}`}>
          <Form.Label>Código de seguridad</Form.Label>
          <Form.Control
            className="number"
            type="text"
            placeholder="XXX"
            required
            disabled={formaDePagoCheck !== "tarjeta"}
            pattern="\d{3}"
            maxLength={3}
            name="codigo_de_seguridad"
            {...numeroSeguridadInput}
          />
        </Form.Group>
        <Form.Group as={Col} md="6" controlId={`vencimiento_${useId()}`}>
          <Form.Label>Vencimiento </Form.Label>
          <Form.Control
            className="number"
            type="text"
            placeholder="MM/AA"
            required
            disabled={formaDePagoCheck !== "tarjeta"}
            pattern="^(0[1-9]|1[0-2])\/(2[2-9]|[3-9][0-9])$"
            name="fecha_de_vencimiento"
            maxLength={5}
            {...vencimientoInput}
          />
        </Form.Group>
      </Row>
      <hr />
      <Form.Check
        required
        type="radio"
        name={forma_de_pago}
        id={`banco_${useId()}`}
        label="Transferencia bancaria"
        value="banco"
        checked={formaDePagoCheck === "banco"}
        onChange={(e) => {
          setFormaDePagoCheck(e.target.value);
          setFormaDePago("Transferencia bancaria");
        }}
      />

      <Row as="section" className="mt-1 p-2">
        <Form.Group as={Col} md="6" controlId={`vencimiento_${useId()}`}>
          <Form.Label>Número de Cuenta</Form.Label>
          <Form.Control
            className="number"
            name="numero_de_cuenta"
            type="text"
            placeholder=""
            required
            disabled={formaDePagoCheck !== "banco"}
            {...numeroCuentaBancariaInput}
          />
        </Form.Group>
      </Row>
    </>
  );
}

export default FormaDePagoModalBody;
