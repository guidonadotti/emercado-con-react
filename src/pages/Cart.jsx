import React, { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Carrito from "../components/Cart/Carrito";
import Form from "react-bootstrap/Form";
import TipoDeEnvio from "../components/Cart/TipoDeEnvio";
import Direccion from "../components/Cart/Direccion";
import Coste from "../components/Cart/Coste";
import FormaDePago from "../components/Cart/FormaDePago";
import Button from "react-bootstrap/Button";
import { CartContext } from "../contexts/CartContext";

function Cart() {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    console.log(new FormData(form));
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);
  };
  const { formID } = useContext(CartContext);
  return (
    <Container as="main">
      <h1 className="text-center">Carrito de compras</h1>
      <Form
        id={formID}
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <h2>Artículos</h2>
        <Carrito />
        <h2>Tipo de Envío</h2>
        <TipoDeEnvio />
        <h2>Dirección</h2>
        <Direccion />
        <h2>Coste</h2>
        <Coste />
        <hr />
        <h2>Forma de pago</h2>
        <FormaDePago />
        <section className="d-grid gap-2">
          <Button type="submit">Comprar</Button>
        </section>
      </Form>
    </Container>
  );
}

export default Cart;
