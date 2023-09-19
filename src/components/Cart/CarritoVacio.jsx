import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import "../../css/CarritoVacio.css";

export default function CarritoVacio() {
  const { formValidated } = useContext(CartContext);
  return (
    <section className="my-2 text-center">
      <hr />
      <h3 className={`${formValidated ? "is-invalid" : ""}`}>
        Tu carrito está vacío
      </h3>
      <p className={`${formValidated ? "is-invalid" : ""}`}>
        <small>¿No sabes qué comprar? ¡Miles de productos te esperan!</small>
      </p>
      <div className="invalid-feedback">
        El carrito no puede estar vacío para comprar.
      </div>
      <hr />
    </section>
  );
}
