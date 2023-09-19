import React from "react";
import "../css/modal.css";

function ModalPersonalizado({ children, show, ...props }) {
  return (
    <div
      className={`modal-container  ${show ? "mostrar" : ""}`}
      style={{ display: show ? "block" : "none" }}
    >
      <dialog className="modal-personalizado" open={show} {...props}>
        {children}
      </dialog>
    </div>
  );
}

export default ModalPersonalizado;
