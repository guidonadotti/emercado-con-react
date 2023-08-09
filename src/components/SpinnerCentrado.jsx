import React from "react";
import Spinner from "react-bootstrap/Spinner";
import "../css/Spinner.css";

function SpinnerCentrado() {
  return (
    <div className="spinner-container">
      <Spinner animation="border" />
    </div>
  );
}

export default SpinnerCentrado;
