import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./COmponent/Homepage";
import { Navbar } from "./COmponent/Navbar";
import { ProductDetail } from "./COmponent/ProductDetail";

const IndexRoute = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path={"/"} exact component={HomePage} />
        <Route path={"/productdetail/:id"} exact component={ProductDetail} />
      </Switch>
    </Router>
  );
};

export default IndexRoute;
