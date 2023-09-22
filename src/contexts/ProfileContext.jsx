import { createContext, useContext, useRef } from "react";
import { LoginContext } from "./LoginContext";
import Col from "react-bootstrap/Col";

export const ProfileContext = createContext();

export function ProfileProvider({ children }) {
  const { users, user } = useContext(LoginContext);
  const userData = users[user];
  const imgInput = useRef();

  const imgPerfilName = "img_perfil";
  const nombreDeUsuarioName = "nombre_de_usuario";
  const names = { imgPerfilName, nombreDeUsuarioName };

  const colProps = { as: Col, md: "5" };
  return (
    <ProfileContext.Provider value={{ userData, colProps, imgInput, names }}>
      {children}
    </ProfileContext.Provider>
  );
}
