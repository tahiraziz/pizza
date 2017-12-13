import React, { Component } from "react";
import { Link } from "react-router-dom";
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
      <Link to={`/${pizza.name.replace(/" "/g, "")}`}>
        <Pizza
          key={pizza.name}
          name={pizza.name}
          cheeses={pizza.cheeses}
          crust={pizza.crust}
          meats={pizza.meats}
          veggies={pizza.veggies}
        />
      </Link>
    ));
    return (
      <div className="pizzaList">
        <h2 className="pizzaList__header">
          The trendiest pizzas{" "}
          <span role="img" aria-label="pizza emoji">
            🍕
          </span>
        </h2>
        {pizzas}
      </div>
    );
  }
}

export default PizzaList;
