import React from "react";
import Contenido from "./Contenido.js";
import Carousel from "./Carousel";
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
        {/* <Route path="/items?search=" component={Carousel} /> */}
      </Router>
    );
  }
}

export default App;
