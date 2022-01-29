import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./COmponent/Homepage";
import { Navbar } from "./COmponent/Navbar";
import { Cart } from "./COmponent/Cart";

const IndexRoute = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path={"/"} exact component={HomePage} />
        <Route path={"/cart"} exact component={Cart} />
      </Switch>
    </Router>
  );
};

export default IndexRoute;
