import React from "react";
// import { BrowserRouter, Route, Routes } from "re";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./cowrywise/components/Home";

export const RouteComponent = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
