import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {
  AiFillFilter as BtnFiltrar,
  AiOutlineClear as BtnLimpiar,
} from "react-icons/ai";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { CategoriesContext } from "../../contexts/CategoriesContext";
import { InputGroup } from "react-bootstrap";

const Filtrar = () => {
  let { filters, setFilters } = useContext(CategoriesContext);
  let [minValue, setMinValue] = useState("");
  let [maxValue, setMaxValue] = useState("");

  function limpiarFiltros(e) {
    setMinValue("");
    setMaxValue("");
    setFilters({
      min: 0,
      max: Infinity,
    });
  }

  function filtrarCategorias(e) {
    e.preventDefault();
    if (!minValue && !maxValue) return;

    setFilters({
      min: minValue || filters.min,
      max: maxValue || filters.max,
    });
  }

  return (
    <Form noValidate onSubmit={filtrarCategorias}>
      <div className="d-flex justify-content-between align-items-center">
        <h3 className="mb-0">Filtrar:</h3>
        <div className="text-end">
          <ButtonGroup>
            <Button
              name="filtrar"
              variant="light"
              type="submit"
              title="Filtrar"
            >
              <BtnFiltrar />
            </Button>
            <Button
              name="limpiar-filtros"
              variant="light"
              type="button"
              title="Limpiar filtros"
              onClick={(e) => limpiarFiltros(e)}
            >
              <BtnLimpiar />
            </Button>
          </ButtonGroup>
        </div>
      </div>
      <hr />
      <InputGroup className="mb-3">
        <InputGroup.Text>Mín.</InputGroup.Text>
        <Form.Control
          type="number"
          className="text-muted"
          name="min"
          min="0"
          max={maxValue ? maxValue - 1 : undefined}
          value={minValue}
          onChange={(e) => setMinValue(e.target.value)}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text>Máx.</InputGroup.Text>
        <Form.Control
          type="number"
          className="text-muted"
          name="max"
          min={parseInt(minValue) + 1 || 1}
          value={maxValue}
          onChange={(e) => {
            setMaxValue(e.target.value);
          }}
        />
      </InputGroup>
    </Form>
  );
};

export default Filtrar;
