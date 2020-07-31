import React from "react";
import Contenido from "./Contenido/Contenido";
import Productos from "./Productos/Productos";
import Card from "./Card/Card";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Contenido} />
          <Route exact path="/items" component={Productos} />
          <Route path="/items/:id" component={Card} />
        </Switch>
      </Router>
    );
  }
}

export default App;
