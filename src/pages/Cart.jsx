import React, { Suspense, useContext, useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

import Carrito from "../components/Cart/Carrito";
import Coste from "../components/Cart/Coste";
import Direccion from "../components/Cart/Direccion";
import FormaDePago from "../components/Cart/FormaDePago";
import TipoDeEnvio from "../components/Cart/TipoDeEnvio";

import { CartContext } from "../contexts/CartContext";
import { LoginContext } from "../contexts/LoginContext";

import "../css/alert.css";
import useWindowTitle from "../hooks/useWindowTitle";

function Cart() {
  const { formValidated, setFormValidated, formID } = useContext(CartContext);
  const { user, users, vaciarCarrito } = useContext(LoginContext);
  const { carrito } = users[user];
  const [mostrarAlerta, setMostrarAlerta] = useState(false);
  useWindowTitle({ windowTitle: "Mi carrito" });
  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.target;

    if (form.checkValidity() && carrito.length !== 0) {
      vaciarCarrito({ email: user });
      setFormValidated(false);
      setMostrarAlerta(true);
    } else {
      setFormValidated(true);
    }
  };
  return (
    <Container as="main">
      <h1 className="text-center">Carrito de compras</h1>
      <Form
        id={formID}
        noValidate
        validated={formValidated}
        onSubmit={handleSubmit}
      >
        <h2>Artículos</h2>
        <Suspense>
          <Carrito />
        </Suspense>
        <h2>Tipo de Envío</h2>
        <TipoDeEnvio />
        <h2>Dirección</h2>
        <Direccion />
        <h2>Coste</h2>
        <Coste />
        <hr />
        <h2>Forma de pago</h2>
        <FormaDePago />
        <section className="mt-2 d-grid gap-2">
          <Button type="submit">Comprar</Button>
        </section>
      </Form>
      {mostrarAlerta && (
        <Alert variant="success" dismissible>
          ¡Compra realizada con éxito!
        </Alert>
      )}
    </Container>
  );
}

export default Cart;
