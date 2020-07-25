import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ul>
          <li>
            <Link to="/MLA/Contenido">Argentina</Link>
          </li>
          <li>
            <Link to="/MBO/Contenido">Bolivia</Link>
          </li>
          <li>
            <Link to="/MLB/Contenido">Brasil</Link>
          </li>
          <li>
            <Link to="/MCO/Contenido">Colombia</Link>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default Home;
