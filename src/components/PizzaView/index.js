import React, { Component } from "react";
import firebase from "../../firebase.js";

export class PizzaView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pizza: {}
    };
  }
  componentDidMount() {
    const pizzaRef = firebase
      .database()
      .ref("pizzas/" + this.props.match.params.pizzaId);
    pizzaRef.on("value", snapshot => {
      let pizza = snapshot.val();
      let newState = {
        name: pizza.name,
        id: pizza.id,
        description: pizza.description,
        pizzams: pizza.pizzams,
        crust: pizza.crust,
        cheeses: pizza.cheeses,
        meats: pizza.meats,
        veggies: pizza.veggies
      };
      this.setState({
        pizza: newState
      });
    });
  }
  render() {
    return <div>{this.state.pizza.name}</div>;
  }
}

export default PizzaView;
