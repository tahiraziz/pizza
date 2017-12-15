import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import "./App.css";
import Order from "./containers/Order";

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
          <Route path="/:pizzaId" component={Order} />
          {/**********************
           * **********
           * move handle selction on home to Order and add invalid routes
           */}
        </Switch>
      </div>
    );
  }
}

export default App;
