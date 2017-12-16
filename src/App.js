import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./containers/Home";
import "./App.css";
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
          <Route exact path="/" render={() => <Home />} />
          {/* <Route path="/:pizzaId" component={Order} /> */}
          <Route
            exact
            path="/order/:pizzaId"
            render={props => (
              <PizzaView
                onPizzaSelection={this.handlePizzaSelection}
                {...props}
              />
            )}
          />
          <Route
            path="/pizzam"
            render={() => <Done pizzaSelection={this.state.selectedPizza} />}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
