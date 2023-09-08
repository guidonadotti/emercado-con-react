import React, { useContext, useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { AiFillDelete as Delete } from "react-icons/ai";
import { LoginContext } from "../../contexts/LoginContext";
import { CartContext } from "../../contexts/CartContext";

function Fila({ id, currency, count, image, name, unitCost }) {
  const [cantidad, setCantidad] = useState(count);
  const { user, setUsers } = useContext(LoginContext);
  const { setCantidadCosto, setCantidadCostoUSD } = useContext(CartContext);

  useEffect(() => {
    setUsers((prevState) => {
      const carritoNuevo = structuredClone(prevState[user]["carrito"]);
      const indice = carritoNuevo.findIndex((prod) => prod.id === id);
      carritoNuevo[indice].count = cantidad;
      return {
        ...prevState,
        [user]: {
          ...prevState[user],
          carrito: carritoNuevo,
        },
      };
    });
    setCantidadCosto((prevState) => {
      if (currency === "USD") return prevState;

      return {
        ...prevState,
        [id]: [unitCost, cantidad],
      };
    });
    setCantidadCostoUSD((prevState) => {
      if (currency === "UYU") return prevState;
      return {
        ...prevState,
        [id]: [unitCost, cantidad],
      };
    });
  }, [cantidad]);

  function handleCantidadChange(e) {
    setCantidad(e.target.value);
  }
  function eliminarProducto() {
    setUsers((prevState) => {
      let carritoNuevo = structuredClone(prevState[user]["carrito"]);
      carritoNuevo = carritoNuevo.filter((prod) => prod.id !== id);
      return {
        ...prevState,
        [user]: {
          ...prevState[user],
          carrito: carritoNuevo,
        },
      };
    });
    setCantidad(0);
  }

  return (
    <tr>
      <td style={{ width: "10%" }}>
        <img src={require(`../../${image}`)} alt={name} />
      </td>
      <td>{name}</td>
      <td className="number">
        {new Intl.NumberFormat("es-UY", {
          style: "currency",
          currency: currency,
        }).format(unitCost)}
      </td>
      <td style={{ width: "10%" }}>
        <Form.Control
          type="number"
          name={`cantidad_${id}`}
          id={`cantidad_${id}`}
          required
          value={cantidad}
          onChange={handleCantidadChange}
          min={1}
        />
      </td>
      <td className="number">
        {new Intl.NumberFormat("es-UY", {
          style: "currency",
          currency: currency,
        }).format(cantidad * unitCost)}
      </td>
      <td style={{ width: "10%" }}>
        <Button variant="outline-danger" onClick={eliminarProducto}>
          <Delete />
        </Button>
      </td>
    </tr>
  );
}

function Carrito() {
  const { user, users } = useContext(LoginContext);
  const { carrito } = users[user];

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
