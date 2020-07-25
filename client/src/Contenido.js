import React from "react";
import Carousel from "./Carousel.js";
import "./Contenido.css";

class Contenido extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  submit() {
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${this.state.value}`)
      .then((respuesta) => {
        respuesta
          .json()
          .then((info) => {
            this.setState({ results: info.results });
          })
          .catch((err) => {});
      })
      .catch((err) => {});
  }

  render() {
    return (
      <div className="Contenido">
        <input type="search" onChange={(e) => this.handleChange(e)} />
        <button type="submit" onClick={() => this.submit()}>
          Enviar
        </button>
        <Carousel results={this.state.results} />
      </div>
    );
  }
}

export default Contenido;
