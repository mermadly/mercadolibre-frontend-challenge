import React from "react";
import Carousel from "./Carousel.js";
import "./Contenido.css";

class Contenido extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      value: "",
      error: false,
    };
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  async componentDidMount() {
    const data = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=${this.state.value}`
    );
    const result = await data.json();
    this.setState({
      results: result.results,
    });
  }

  submit() {
    fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=${this.state.value}&limit=3`
    )
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

  handleSubmit() {
    this.state.value !== "" ? this.submit() : this.setState({ error: true });
  }

  render() {
    return (
      <div className="Contenido">
        <header className="header">
          <form>
            <input
              type="search"
              placeholder="Nunca dejes de buscar"
              onChange={(e) => this.handleChange(e)}
              aria-label="Nunca dejes de buscar"
            />
            <button
              type="submit"
              onClick={(e) => e.preventDefault(this.handleSubmit())}
            >
              Enviar
            </button>
          </form>
        </header>
        <Carousel results={this.state.results} />
        {console.log(this.state.results)}
      </div>
    );
  }
}

export default Contenido;
