import React, { useContext } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import BarraItem from "./BarraItem";
import { LoginContext } from "../../contexts/LoginContext";

const BarraItemPerfil = ({ children }) => {
  const { cerrarSesion } = useContext(LoginContext);

  if (children === "Iniciar sesión")
    return <BarraItem link="/login">{children}</BarraItem>;

  return (
    <NavDropdown title={children} id="basic-nav-dropdown">
      <Link className="dropdown-item" to="cart">
        Mi Carrito
      </Link>
      <Link className="dropdown-item" to="my-profile">
        Mi perfil
      </Link>
      <Link className="dropdown-item" onClick={cerrarSesion}>
        Cerrar sesión
      </Link>
    </NavDropdown>
  );
};

export default BarraItemPerfil;
