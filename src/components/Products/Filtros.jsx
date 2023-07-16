import React, { useContext, useState } from "react";
import {
  AiFillFilter as BtnFiltrar,
  AiOutlineClear as BtnLimpiar,
} from "react-icons/ai";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { ProductsContext } from "../../contexts/ProductsContexts";
import { AiOutlineSearch as Lupita } from "react-icons/ai";

function Filtros() {
  let { setFilters } = useContext(ProductsContext);
  let [minValue, setMinValue] = useState("");
  let [maxValue, setMaxValue] = useState("");
  let [searchValue, setSearchValue] = useState("");

  function limpiarFiltros() {
    setMinValue("");
    setMaxValue("");
    setFilters({
      busqueda: "",
      min: 0,
      max: Infinity,
    });
  }
  function filtrar(e) {
    e.preventDefault();
    setFilters({
      min: minValue || 0,
      max: maxValue || Infinity,
      busqueda: searchValue,
    });
  }
  return (
    <Form noValidate onSubmit={filtrar}>
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
              onClick={limpiarFiltros}
            >
              <BtnLimpiar />
            </Button>
          </ButtonGroup>
        </div>
      </div>
      <hr />
      <InputGroup className="mb-3">
        <InputGroup.Text>
          <Lupita />
        </InputGroup.Text>
        <Form.Control
          type="search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text>Mín.</InputGroup.Text>
        <Form.Control
          type="number"
          className="text-muted"
          name="min"
          min="0"
          max={maxValue ? maxValue - 100 : undefined}
          value={minValue}
          onChange={(e) => setMinValue(e.target.value)}
          step="100"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text>Máx.</InputGroup.Text>
        <Form.Control
          type="number"
          className="text-muted"
          name="max"
          min={parseInt(minValue) + 100 || 1}
          value={maxValue}
          onChange={(e) => setMaxValue(e.target.value)}
          step={"100"}
        />
      </InputGroup>
    </Form>
  );
}

export default Filtros;
