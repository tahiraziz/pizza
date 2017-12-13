import React, { Component } from "react";

export class PizzaView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: this.props.pizza
    };
  }
  render() {
    return <div>{this.state.ingredients.name}</div>;
  }
}

export default PizzaView;
