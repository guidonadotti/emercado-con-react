import React, { useContext, useState } from "react";
import { BsStar as Star, BsStarFill as StarFill } from "react-icons/bs";
import { EstrellasContext } from "../../contexts/EstrellasContext";

function Estrellas({ name }) {
  const { chequeado, setChequeado } = useContext(EstrellasContext);
  const onOptionChange = (e) => {
    setChequeado(e.target.value);
  };
  return (
    <>
      {[...Array(5)].map((_, index) => {
        const value = index + 1;
        return (
          <label key={`label_estrella_${index}`} className="cursor-active">
            <input
              required
              className="btn-check"
              value={value}
              type="radio"
              name={name}
              checked={chequeado == value}
              onChange={onOptionChange}
            />
            {chequeado >= value ? (
              <StarFill style={{ color: "gold" }} />
            ) : (
              <Star />
            )}
          </label>
        );
      })}
    </>
  );
}

export default Estrellas;
