import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { PizzaView } from "../PizzaView/index";
import { Done } from "../Done/index";

const Order = () => {
  return (
    <Switch>
      <Route exact path="/:pizzaId" component={PizzaView} />
      <Route path="/:pizzaId/pizzam" component={Done} />
      <Redirect to="/" />
    </Switch>
  );
};

export default Order;
