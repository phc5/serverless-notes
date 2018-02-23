import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./containers/Home/Home";
import Login from "./containers/Login/Login";
import NotFound from "./containers/NotFound/NotFound";


export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
    <Route component={NotFound} />
  </Switch>;