import React, { useState } from "react";
import "./SearchBox.scss";
import searchLogo from "../img/ic_Search.png";
import MLlogo from "../img/Logo_ML.png";
import { useHistory } from "react-router-dom";

const SearchBox = (props) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const history = useHistory();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    if (value == "") {
      setError(true);
    } else {
      history.push({ pathname: "/items", search: `?search=${value}` });
    }
  };

  return (
    <header className="header">
      <form>
        <img src={MLlogo} alt="logo MercadoLibre" className="logo" />

        <input
          className="SearchBox"
          type="search"
          placeholder="Nunca dejes de buscar"
          onChange={(e) => handleChange(e)}
          aria-label="Nunca dejes de buscar"
        />
        <button
          className="searchButton"
          type="submit"
          onClick={(e) => e.preventDefault(handleSubmit())}
        >
          <img src={searchLogo} alt="" />
        </button>
      </form>
      {/* {props.error ? (
        <div role="alert">Escribí en el buscador lo que querés encontrar</div>
      ) : (
        ""
      )} */}
    </header>
  );
};

export default SearchBox;
