import React from "react";
import MainCabecera from "../General/MainCabecera";

function ProductsMainCabecera({ categoria = "" }) {
  categoria = categoria.replace(/\b\w/g, (l) => l.toUpperCase());

  return (
    <MainCabecera titulo={categoria}>
      Verás aquí todos los productos de la categoría «{categoria}»
    </MainCabecera>
  );
}

export default ProductsMainCabecera;
