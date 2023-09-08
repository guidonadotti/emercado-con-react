import useLocalStorage from "./useLocalStorage";

export default function useActiveUser() {
  const [user, setUser] = useLocalStorage({
    key: "usuarioActivo",
    initialValue: "",
  });

  function cerrarSesion() {
    setUser("");
  }
  function iniciarSesion({ email }) {
    setUser(email);
  }

  return {
    user,
    cerrarSesion,
    iniciarSesion,
  };
}
