import React, { useContext, useEffect, useRef, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import FormaDePagoModalBody from "./FormaDePagoModalBody";

function FormaDePago() {
  const { formaDePago } = useContext(CartContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const modal = useRef();
  useEffect(() => {
    console.log(modal);
  }, [modal]);

  return (
    <>
      <p>
        {formaDePago} <Link onClick={handleShow}>Seleccionar</Link>
      </p>
      <Modal ref={modal.current} show={show} onHide={handleClose}>
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
    </>
  );
}

export default FormaDePago;
