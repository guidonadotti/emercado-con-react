import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import FormaDePagoModalBody from "./FormaDePagoModalBody";
import Modal from "react-bootstrap/Modal";
import { PagoModalBodyProvider } from "../../contexts/PagoModalBodyContext";
import "../../css/CarritoVacio.css";

function FormaDePago() {
  const { formaDePago, formValidated, modalValidity } = useContext(CartContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <p
        className={`${
          !formValidated ? "" : modalValidity ? "is-valid" : "is-invalid"
        } m-0`}
      >
        {formaDePago} <Link onClick={handleShow}>Seleccionar</Link>
      </p>
      <div className="invalid-feedback">
        Debe seleccionar una forma de pago y completarla correctamente.
      </div>
      <PagoModalBodyProvider>
        <div className="d-none">
          <FormaDePagoModalBody />
        </div>
        <Modal
          show={show}
          onHide={handleClose}
          contentClassName={formValidated && "was-validated"}
        >
          <Modal.Header closeButton>
            <Modal.Title as="h3">Forma de Pago</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormaDePagoModalBody />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </PagoModalBodyProvider>
    </>
  );
}

export default FormaDePago;
