import React, { useContext } from "react";
import CardPersonalizada from "../General/Cards";
import { CategoriesContext } from "../../contexts/CategoriesContext";
import SpinnerCentrado from "../SpinnerCentrado";

const Categoria = ({ imgSrc, ...props }) => {
  return <CardPersonalizada imgSrc={require(`../../${imgSrc}`)} {...props} />;
};
const opciones = {
  az: function (a, b) {
    return a.name.localeCompare(b.name);
  },
  za: function (a, b) {
    return b.name.localeCompare(a.name);
  },
  dsc: function (a, b) {
    let [aCount, bCount] = [a, b].map((elemento) =>
      parseInt(elemento.productCount)
    );
    return bCount - aCount;
  },
};

let Categorias = () => {
  const { categorias, filters, order, isLoading } =
    useContext(CategoriesContext);

  return (
    <section className="grid-cards-container">
      {isLoading && <SpinnerCentrado />}

      {categorias
        .filter((cat) => {
          const { min, max } = filters;
          const cantidad = parseInt(cat.productCount);
          return cantidad >= min && cantidad <= max;
        })
        .sort(opciones[order])
        .map(({ id, name, imgSrc, description, productCount }) => {
          return (
            <article className="categorie" key={`${name}_${id}`}>
              <Categoria
                to={`${id}`}
                name={name}
                imgSrc={imgSrc}
                description={description}
                productCount={productCount}
              />
            </article>
          );
        })}
    </section>
  );
};

export default Categorias;
