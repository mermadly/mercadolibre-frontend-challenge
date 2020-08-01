import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./Productos.scss";
import { Link, useLocation } from "react-router-dom";

const Productos = () => {
  const [results, setResults] = useState([]);
  const location = useLocation();

  const getSearchParams = () => {
    //Herramienta del navegador
    return new URLSearchParams(location.search);
  };

  useEffect(() => {
    search();
  }, []);

  const search = () => {
    let query = getSearchParams();

    fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=${query.get(
        "search"
      )}&limit=5`
    )
      .then((respuesta) => {
        respuesta
          .json()
          .then((info) => {
            setResults(info.results);
          })
          .catch((err) => {});
      })
      .catch((err) => {});
  };

  return (
    <div className="mainContainer">
      <div className="container">
        {results.map((obj, index) => {
          return (
            <Link
              key={index}
              to={{ pathname: `/items/${obj.id}`, state: { data: obj } }}
              className="link"
            >
              <Card obj={obj} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Productos;
