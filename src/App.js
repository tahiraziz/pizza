import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path='/create' component={CreatePizza}/>
          <Route path='/review' component={ReviewPizza}/>
          <Route path='/completed' component={CompletedOrder}/> */}
        </Switch>
      </div>
    );
  }
}

export default App;
