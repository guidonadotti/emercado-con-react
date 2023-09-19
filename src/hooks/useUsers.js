import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

export default function useUsers() {
  const [users, setUsers] = useLocalStorage({
    key: "usuarios",
    initialValue: {},
  });
  useEffect(() => console.log(users), [users]);

  function guardarDatos({ email }) {
    setUsers((prevState) => {
      if (email in prevState) return prevState;
      return {
        ...prevState,
        [email]: {
          email: email,
          nombre_de_usuario: email.split("@")[0],
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
          ...prevState[email],
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
          ...prevState[email],
          carrito: prevState[email]["carrito"].filter((prod) => prod.id != id),
        },
      };
    });
  }
  function estaEnCarrito({ email, id }) {
    if (!email) return false;
    return users[email]["carrito"].findIndex((p) => p["id"] == id) != -1;
  }
  function vaciarCarrito({ email }) {
    setUsers((prevState) => {
      return {
        ...prevState,
        [email]: {
          ...prevState[email],
          carrito: [],
        },
      };
    });
  }
  function getActiveUsername({ email }) {
    if (!email) return;
    return users[email]["nombre_de_usuario"];
  }
  function getUserData({ email, data }) {
    if (!email) return;
    return users[email][data];
  }
  function setUserData({ email, data }) {
    setUsers((prevState) => {
      return {
        ...prevState,
        [email]: {
          ...prevState[email],
          ...data,
        },
      };
    });
  }
  function getCart({ email }) {
    if (!email) return;
    return users[email]["carrito"];
  }
  return {
    users,
    setUsers,
    guardarDatos,
    agregarCarrito,
    quitarCarrito,
    estaEnCarrito,
    getActiveUsername,
    getCart,
    vaciarCarrito,
    getUserData,
    setUserData,
  };
}
