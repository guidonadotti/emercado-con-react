import React, { lazy, useContext } from "react";
import { LoginContext } from "../../contexts/LoginContext";

const CarritoVacio = lazy(() => import("./CarritoVacio"));
const Fila = lazy(() => import("./Fila"));
const Table = lazy(() => import("react-bootstrap/Table"));

function Carrito() {
  const { user, users } = useContext(LoginContext);
  const { carrito } = users[user];

  if (carrito.length === 0) return <CarritoVacio />;
  return (
    <Table hover responsive>
      <thead>
        <tr>
          <th></th>
          <th>Nombre</th>
          <th>Costo</th>
          <th>Cantidad</th>
          <th>Subtotal</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {carrito.map((prod) => {
          return <Fila key={`producto_${prod.name}_${prod.id}`} {...prod} />;
        })}
      </tbody>
    </Table>
  );
}

export default Carrito;
