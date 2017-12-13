import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import "./App.css";
import { PizzaView } from "./components/PizzaView/index";

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
          <Route
            path="/:pizzaId"
            render={() => <PizzaView pizza={this.state.selectedPizza} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
