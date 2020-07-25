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
        <header className="header">
          <input
            type="search"
            placeholder="Nunca dejes de buscar"
            onChange={(e) => this.handleChange(e)}
          />
          <button
            type="submit"
            onClick={
              this.state.value !== ""
                ? () => this.submit()
                : console.log("holas")
            }
          >
            Enviar
          </button>
        </header>
        <Carousel results={this.state.results} />
        {console.log(this.state.results)}
      </div>
    );
  }
}

export default Contenido;
