import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./Productos.scss";
import { Link, useLocation } from "react-router-dom";

const Productos = () => {
  const [results, setResults] = useState([]);
  const location = useLocation();
  const [prueba, setPrueba] = useState({});
  console.log(prueba);

  const getSearchParams = () => {
    //Herramienta del navegador
    return new URLSearchParams(location.search);
  };

  useEffect(() => {
    search();
    fetchPrueba();
  }, [location.search]);

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

  const fetchPrueba = () => {
    let url = `http://localhost:5000/`;
    fetch(url)
      .then((respuesta) => {
        respuesta
          .json()
          .then((info) => {
            setPrueba(info.nombre);
          })
          .catch((err) => {});
      })
      .catch((err) => {});
  };

  return (
    <div className="mainContainer">
      <div className="container">
        <div>
          {prueba.nombre} {prueba.apellido} {prueba.edad}
        </div>
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
