import useLocalStorage from "./useLocalStorage";

export default function useUsers() {
  const [users, setUsers] = useLocalStorage({
    key: "usuarios",
    initialValue: {},
  });

  function guardarDatos({ email }) {
    setUsers((prevState) => {
      if (email in prevState) return prevState;
      return {
        ...prevState,
        [email]: {
          carrito: [],
        },
      };
    });
  }

  function agregarCarrito({ email, producto }) {
    setUsers((prevState) => {
      return {
        ...prevState,
        [email]: {
          carrito: [...prevState[email]["carrito"], producto],
        },
      };
    });
  }
  function quitarCarrito({ email, id }) {
    setUsers((prevState) => {
      return {
        ...prevState,
        [email]: {
          carrito: prevState[email]["carrito"].filter((prod) => prod.id != id),
        },
      };
    });
  }
  function estaEnCarrito({ email, id }) {
    if (!email) return false;
    return users[email]["carrito"].findIndex((p) => p.id == id) != -1;
  }

  return { users, guardarDatos, agregarCarrito, quitarCarrito, estaEnCarrito };
}
