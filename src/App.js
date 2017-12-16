import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./containers/Home";
import "./App.css";
import Order from "./containers/Order";
import { PizzaView } from "./containers/PizzaView/index";
import Done from "./containers/Done";

class App extends Component {
  constructor(props) {
    super(props);
    this.handlePizzaSelection = this.handlePizzaSelection.bind(this);
    this.state = { selectedPizza: "" };
  }
  handlePizzaSelection = pizza => {
    this.setState({ selectedPizza: pizza });
  };
  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Home onPizzaSelection={this.handlePizzaSelection} />}
          />
          {/* <Route path="/:pizzaId" component={Order} /> */}
          <Route exact path="/order/:pizzaId" component={PizzaView} />
          <Route path="/pizzam" component={Done} />
          <Redirect to="/" />
        </Switch>
        {/**********************
         * **********
         * move handle selction on home to Order and add invalid routes
         */}
      </div>
    );
  }
}

export default App;
