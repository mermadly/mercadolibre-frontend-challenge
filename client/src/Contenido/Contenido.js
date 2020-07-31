import React from "react";
import Productos from "../Productos/Productos";
import SearchBox from "../SearchBox/SearchBox";
import Card from "../Card/Card";
import "../Card/Card.scss";
import "../SearchBox/SearchBox.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";

class Contenido extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      value: "",
      error: false,
      temporaryObj: {
        accepts_mercadopago: true,
        address: { state_name: "Capital Federal" },
        category_id: "MLA3422",
        id: "MLA868841720",
        permalink:
          "https://articulo.mercadolibre.com.ar/MLA-868841720-kitty-mc-donald-8-juguetes-de-hello-kitty-_JM",
        price: 550,
        shipping: { free_shipping: true },
        site_id: "MLA",
        thumbnail:
          "http://mla-s1-p.mlstatic.com/901929-MLA41598396356_042020-I.jpg",
        title: "Kitty - Mc Donald - 8 Juguetes De Hello Kitty. ",
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
      `https://api.mercadolibre.com/sites/MLA/search?q=${this.state.value}&limit=5`
    )
      .then((respuesta) => {
        respuesta
          .json()
          .then((info) => {
            this.setState({ results: info.results });
            //this.props.history.push(`/items?search=${this.state.value}`);
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
        <SearchBox
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          value={this.state.value}
          error={this.state.error}
        ></SearchBox>
        <Productos results={this.state.results} />
        {/* <Link to={`/items/${this.results.id}`}></Link> */}
      </div>
    );
  }
}

export default Contenido;
