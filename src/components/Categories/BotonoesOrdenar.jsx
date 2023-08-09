import React, { useContext, useId } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import {
  ImSortAlphaAsc as AZ,
  ImSortAlphaDesc as ZA,
  ImSortAmountDesc as DSC,
} from "react-icons/im";
import { CategoriesContext } from "../../contexts/CategoriesContext";

const BotonoesOrdenar = () => {
  const { setOrder } = useContext(CategoriesContext);
  const [az, za, dsc] = [`az_${useId()}`, `za_${useId()}`, `dsc_${useId()}`];

  return (
    <Row as="section">
      <Col className="text-end">
        <ToggleButtonGroup
          type="radio"
          name="options"
          onChange={(val) => {
            setOrder(val);
          }}
        >
          <ToggleButton
            className="btn-light"
            id={az}
            value="az"
            title="Ordenar por orden alfabético"
          >
            <AZ />
          </ToggleButton>
          <ToggleButton
            className="btn-light"
            id={za}
            value="za"
            title="Ordenar por orden alfabético inverso"
          >
            <ZA />
          </ToggleButton>
          <ToggleButton
            className="btn-light"
            id={dsc}
            value="dsc"
            title="Ordenar según cantidad"
          >
            <DSC />
          </ToggleButton>
        </ToggleButtonGroup>
      </Col>
    </Row>
  );
};

export default BotonoesOrdenar;
