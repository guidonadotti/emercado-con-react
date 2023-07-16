import React, { useContext } from "react";
import CardPersonalizada from "../General/Cards";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CategoriesContext } from "../../contexts/CategoriesContext";

const Categoria = ({ imgSrc, ...props }) => {
  return <CardPersonalizada imgSrc={require(`../../${imgSrc}`)} {...props} />;
};

let Categorias = () => {
  const { categorias, filters } = useContext(CategoriesContext);

  return (
    <Row as="section" className="gy-3">
      {categorias
        .filter((cat) => {
          const { min, max } = filters;
          const cantidad = parseInt(cat.productCount);
          return cantidad >= min && cantidad <= max;
        })
        .map(({ id, name, imgSrc, description, productCount }) => {
          return (
            <Col as="article" md={6} lg={4} key={`${name}_${id}`}>
              <Categoria
                to={`${id}`}
                name={name}
                imgSrc={imgSrc}
                description={description}
                productCount={productCount}
              />
            </Col>
          );
        })}
    </Row>
  );
};

export default Categorias;
