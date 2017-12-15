import React from "react";
import { Switch, Route } from "react-router-dom";
import PizzaView from "../PizzaView";
import Done from "../Done";

const Order = () => {
  return (
    <Switch>
      <Route exact path="/:pizzaId" component={PizzaView} />
      <Route path="/:pizzaId/pizzam" component={Done} />
    </Switch>
  );
};

export default Order;
