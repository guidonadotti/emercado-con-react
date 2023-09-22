import React from "react";
import "../css/Spinner.css";

function Spinner() {
  return (
    <div id="spinner-wrapper">
      <span className="visually-hidden">Cargando...</span>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Spinner;

