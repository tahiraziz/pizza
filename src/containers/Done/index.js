import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Done extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="done">
        <h1 className="done__title">PIZZAM!</h1>
        <h2 className="done__subtitle">
          You just ordered a {this.props.pizzaSelection} pizza that someone
          awesome designed.
        </h2>
        <Link to={"/"}>
          <button>Return Home</button>
        </Link>
      </div>
    );
  }
}

export default Done;
