import React from "react";
import "../css/Spinner.css";

function Spinner() {
  return (
    <div id="spinner-wrapper">
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Spinner;

