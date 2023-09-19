import React, { useContext, useEffect } from "react";
import { CartContext } from "../../contexts/CartContext";
import { USDUYU } from "../../utils/USDUYU";

function Coste() {
  const { cantidadCosto, cantidadCostoUSD, tipoDeEnvio, multiplicarYSumar } =
    useContext(CartContext);
  const costo =
    multiplicarYSumar(cantidadCosto) / USDUYU +
    multiplicarYSumar(cantidadCostoUSD);
  const costoEnvio = (costo * tipoDeEnvio) / 100 || 0;

  function darFormato(numero) {
    return new Intl.NumberFormat("es-UY", {
      style: "currency",
      currency: "USD",
    }).format(numero);
  }
  return (
    <section className="border rounded">
      <article className="d-flex justify-content-between m-3">
        <div>
          <h3 className="m-0">Subtotal</h3>
          <small className="text-muted">
            Costo unitario del producto por cantidad
          </small>
        </div>
        <small className="text-muted align-self-center number">
          {darFormato(costo)}
        </small>
      </article>
      <hr />

      <article className="d-flex justify-content-between m-3">
        <div>
          <h3 className="m-0">Costo de envío</h3>
          <small className="text-muted">Según el tipo de envío</small>
        </div>
        <small className="text-muted align-self-center number">
          {darFormato(costoEnvio)}
        </small>
      </article>
      <hr />

      <article className="d-flex justify-content-between m-3">
        <h3 className="m-0">Total ($)</h3>
        <strong className="align-self-center number">
          {darFormato(costo + costoEnvio)}
        </strong>
      </article>
    </section>
  );
}

export default Coste;
