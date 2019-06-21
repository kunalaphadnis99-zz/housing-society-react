import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NotFound from "./NotFound";
import RegisterScreen from "../components/RegisterScreen";
import LoginScreen from "../components/LoginScreen";
import LogoutScreen from "../components/LogoutScreen";
import HomeScreen from "../components/HomeScreen";
import EventScreen from "../components/EventScreen";

import PrivateRoute from "./PrivateRoute";
import GuestRoute from "./GuestRoute";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <GuestRoute exact path="/register" component={RegisterScreen} />
      <GuestRoute exact path="/" component={LoginScreen} />

      <PrivateRoute exact path="/logout" component={LogoutScreen} />
      <PrivateRoute exact path="/home" component={HomeScreen} />
      <PrivateRoute exact path="/events" component={EventScreen} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
