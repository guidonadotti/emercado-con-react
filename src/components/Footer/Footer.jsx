import React from "react";
import "../../css/footer.css";
import pdf from "../../Letra.pdf";
import { Link } from "react-router-dom";
import { BsFillArrowUpCircleFill as Up } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const Footer = () => {
  return (
    <Container as="footer" className="text-muted">
      <a href="#top" className="float-end">
        <Button variant="ligth" size="lg" title="Volver arriba">
          <Up />
        </Button>
      </a>
      <p>
        Este sitio forma parte de{" "}
        <Link to="https://jovenesaprogramar.edu.uy/" target="_blank">
          Jovenes a Programar
        </Link>
        - 2022
      </p>
      <p>
        Cliquea{" "}
        <Link target="_blank" to={pdf}>
          aquí
        </Link>{" "}
        para descargar la letra del obligatorio.
      </p>
    </Container>
  );
};

export default Footer;
