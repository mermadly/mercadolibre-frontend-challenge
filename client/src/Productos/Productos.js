import React from "react";
import Card from "../Card/Card";
import "./Productos.scss";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Productos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="mainContainer">
        <div className="container">
          {this.props.results.map((obj, index) => {
            return (
              <Link key={index} to={`/items/${obj.id}`} className="link">
                <Card obj={obj} />
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Productos;
