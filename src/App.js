import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import Order from "./containers/Order";
import "./App.css";
// import PizzaView from "./containers/PizzaView";

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
          {/* <Route path="/:pizzaId" component={PizzaView} /> */}
          <Route path="/:pizzaId" component={Order} />
        </Switch>
      </div>
    );
  }
}

export default App;
