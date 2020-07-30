import React from "react";
import "./SearchBox.scss";
import searchLogo from "../img/ic_Search.png";
import MLlogo from "../img/Logo_ML.png";

const SearchBox = (props) => {
  return (
    <header className="header">
      <form>
        <img src={MLlogo} alt="logo MercadoLibre" className="logo" />

        <input
          className="SearchBox"
          type="search"
          placeholder="Nunca dejes de buscar"
          onChange={(e) => props.handleChange(e)}
          aria-label="Nunca dejes de buscar"
        />
        <button
          className="searchButton"
          type="submit"
          onClick={(e) => e.preventDefault(props.handleSubmit())}
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
