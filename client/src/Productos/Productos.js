import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import Card from "../Card/Card";
import Breadcrumb from "../Breadcrumb/Breadcrumb";

import "./Productos.scss";

const Productos = () => {
  const [fetchInfo, setfetchInfo] = useState([]);
  const location = useLocation();

  const getSearchParams = () => {
    //Herramienta del navegador
    return new URLSearchParams(location.search);
  };

  useEffect(() => {
    search();
  }, [location.search]);

  const search = async () => {
    let query = getSearchParams();
    let url = `http://localhost:5000/api/items?q=${query.get("search")}`;

    const respuesta = await fetch(url);
    const data = await respuesta.json();

    setfetchInfo(data);
  };

  return (
    <div className="mainContainer">
      <div className="container">
        {fetchInfo.items ? (
          <div className="productBreadcrumb">
            <Breadcrumb categories={fetchInfo.categories} />
          </div>
        ) : null}
        {fetchInfo.items &&
          fetchInfo.items.map((obj, index) => {
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
