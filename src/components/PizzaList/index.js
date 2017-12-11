import React, { Component } from "react";
import Pizza from "../Pizza";
import firebase from "../../firebase.js";

class PizzaList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pizzas: []
    };
  }
  componentDidMount() {
    const itemsRef = firebase.database().ref("pizzas");
    itemsRef.on("value", snapshot => {
      let pizzas = snapshot.val();
      let newState = [];
      for (let pizza in pizzas) {
        newState.push({
          id: pizza,
          name: pizzas[pizza].name,
          cheeses: pizzas[pizza].cheeses,
          crust: pizzas[pizza].crust,
          meats: pizzas[pizza].meats,
          veggies: pizzas[pizza].veggies
        });
      }
      this.setState({
        pizzas: newState
      });
    });
  }
  componentWillUnmount() {}
  render() {
    let pizzas = this.state.pizzas.map(pizza => (
      <Pizza
        name={pizza.name}
        cheeses={pizza.cheeses}
        crust={pizza.crust}
        meats={pizza.meats}
        veggies={pizza.veggies}
      />
    ));
    return <div className="pizzaList">{pizzas}</div>;
  }
}

export default PizzaList;
