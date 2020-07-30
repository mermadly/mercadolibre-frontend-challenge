import React from "react";
import Productos from "../Productos/Productos";
import SearchBox from "../SearchBox/SearchBox";
import "../SearchBox/SearchBox.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";

class Contenido extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      value: "",
      error: false,
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
        <Router>
          <Productos results={this.state.results} />
          {/* <Link to={`/items/${this.results.id}`}></Link> */}
        </Router>
      </div>
    );
  }
}

export default Contenido;
