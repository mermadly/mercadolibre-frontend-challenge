import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Productos from "./Productos/Productos";
import Item from "./Item/Item";
import SearchBox from "./SearchBox/SearchBox";

const App = () => {
  return (
    <>
      <Router>
        <SearchBox />
        <Switch>
          <Route exact path="/items" component={Productos} />
          <Route path="/items/:id" component={Item} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
