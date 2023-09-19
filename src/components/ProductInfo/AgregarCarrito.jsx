import { useContext } from "react";
import Button from "react-bootstrap/Button";
import {
  BsFillCartDashFill as CartDash,
  BsFillCartPlusFill as CartAdd,
} from "react-icons/bs";
import { LoginContext } from "../../contexts/LoginContext";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductContext";

function AgregarCarrito() {
  const { user, estaEnCarrito, quitarCarrito, agregarCarrito } =
    useContext(LoginContext);
  const { producto } = useContext(ProductContext);
  const { id } = useParams();

  function handleClick() {
    if (estaEnCarrito({ email: user, id: id }))
      quitarCarrito({ email: user, id: id });
    else
      agregarCarrito({
        email: user,
        producto: {
          id: producto.id,
          name: producto.name,
          count: 1,
          unitCost: producto.cost,
          currency: producto.currency,
          image: producto.images[0],
        },
      });
  }

  return (
    <Button
      variant="dark"
      title="Agregar al carrito"
      disabled={user == ""}
      onClick={handleClick}
    >
      {estaEnCarrito({ email: user, id: id }) ? <CartDash /> : <CartAdd />}
    </Button>
  );
}

export default AgregarCarrito;
