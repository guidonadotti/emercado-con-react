import React, { useContext, useId } from "react";
import Form from "react-bootstrap/Form";
import { CartContext } from "../../contexts/CartContext";

function TipoDeEnvio() {
  const { tipoDeEnvio, setTipoDeEnvio } = useContext(CartContext);
  return (
    <section>
      <Form.Check
        required
        id={`presencial_${useId()}`}
        type="radio"
        name="tipo_de_envio"
        label="Retiro presencial (0%)"
        value={0}
        checked={tipoDeEnvio == 0}
        onChange={(e) => setTipoDeEnvio(e.target.value)}
      />
      <Form.Check
        required
        id={`standard_${useId()}`}
        type="radio"
        name="tipo_de_envio"
        label="Standard 12 a 15 días (5%)"
        value={5}
        checked={tipoDeEnvio == 5}
        onChange={(e) => setTipoDeEnvio(e.target.value)}
      />
      <Form.Check
        required
        id={`express_${useId()}`}
        type="radio"
        name="tipo_de_envio"
        label="Express 5 a 8 días (7%)"
        value={7}
        checked={tipoDeEnvio == 7}
        onChange={(e) => setTipoDeEnvio(e.target.value)}
      />
      <Form.Check
        required
        id={`premium_${useId()}`}
        type="radio"
        name="tipo_de_envio"
        label="Premium 2 a 5 días (15%)"
        value={15}
        checked={tipoDeEnvio == 15}
        onChange={(e) => setTipoDeEnvio(e.target.value)}
      />
    </section>
  );
}

export default TipoDeEnvio;
