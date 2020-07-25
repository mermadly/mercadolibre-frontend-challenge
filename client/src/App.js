import React from "react";
import Contenido from "./Contenido.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Route path="/" component={Contenido} />
      </Router>
    );
  }
}

export default App;
