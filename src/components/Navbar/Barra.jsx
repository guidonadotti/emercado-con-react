import React, { useContext } from "react";
import BarraItem from "./BarraItem";
import BarraItemPerfil from "./BarraItemPerfil";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LoginContext } from "../../contexts/LoginContext";

const Barra = () => {
  const { user } = useContext(LoginContext);

  return (
    <Navbar id="top" expand="lg" className="navbar-dark bg-dark p-1">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="collapse navbar-collapse" id="navbarNav">
          <Nav className="w-100 justify-content-between">
            <BarraItem link="/">Inicio</BarraItem>
            <BarraItem link="/categories">Categorías</BarraItem>
            <BarraItem link="/sell">Vender</BarraItem>
            <BarraItemPerfil>{user || "Iniciar sesión"}</BarraItemPerfil>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Barra;
