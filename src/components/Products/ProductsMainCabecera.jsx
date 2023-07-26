import React from "react";
import MainCabecera from "../General/MainCabecera";
import mayusculas from "../../utils/mayusculas";

function ProductsMainCabecera({ categoria = "" }) {
  categoria = mayusculas(categoria);

  return (
    <MainCabecera titulo={categoria}>
      Verás aquí todos los productos de la categoría «{categoria}»
    </MainCabecera>
  );
}

export default ProductsMainCabecera;
