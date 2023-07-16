import React, { useContext, useId } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import {
  ImSortAmountDesc as DSC,
  ImSortAmountAsc as ASC,
} from "react-icons/im";
import { ProductsContext } from "../../contexts/ProductsContexts";

function BotonesOrdenar() {
  const { productosLista, setProductosLista } = useContext(ProductsContext);
  const [dsc, asc, rel] = [useId(), useId(), useId()];

  const ordenar = (val) => {
    const opciones = {
      dsc: function (a, b) {
        return -(a.cost - b.cost);
      },
      asc: function (a, b) {
        return a.cost - b.cost;
      },
      rel: function (a, b) {
        return -(a.soldCount - b.soldCount);
      },
    };
    setProductosLista([...productosLista].sort(opciones[val]));
  };

  return (
    <Row as="section">
      <Col className="text-end">
        <ToggleButtonGroup onChange={ordenar} type="radio" name="options">
          <ToggleButton
            title="Ordenar descendentemente por precio"
            value="dsc"
            id={dsc}
            className="btn-light"
          >
            <DSC /> $
          </ToggleButton>
          <ToggleButton
            title="Ordenar ascendentemente por precio"
            value="asc"
            id={asc}
            className="btn-light"
          >
            <ASC /> $
          </ToggleButton>
          <ToggleButton
            title="Ordenar descendentemente por cantidades vendidas"
            value="rel"
            id={rel}
            className="btn-light"
          >
            <DSC />
            Rel
          </ToggleButton>
        </ToggleButtonGroup>
      </Col>
    </Row>
  );
}

export default BotonesOrdenar;
