import React, { Component } from "react";
import firebase from "../../firebase.js";
import "./PizzaView.css";

export class PizzaView extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      pizza: {}
    };
  }
  handleInputChange(e, cat) {
    const target = e.target;
    const value =
      target.type === "checkbox" || target.type === "radio"
        ? target.checked
        : target.value;
    const name = target.name;
    let newPizza = this.state.pizza;
    let toppingCat = cat.toLowerCase();
    console.log();
    newPizza[toppingCat][name] = value;
    this.setState({
      pizza: newPizza
    });
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
  renderToppingInputs(toppingCategory, topping) {
    let inputs = [];

    for (let choice in topping) {
      //male separate check for type=radio for crust
      inputs.push(
        <label key={choice}>
          <input
            name={choice}
            type="checkbox"
            checked={topping[choice] === true}
            onChange={e => this.handleInputChange(e, toppingCategory)}
          />
          {choice}
        </label>
      );
    }
    return inputs;
  }
  renderToppings(toppings, toppingCategories) {
    return toppings.map((topping, toppingCategory) => (
      <div className="pizzaView__toppings__category" key={toppingCategory}>
        <h4>{toppingCategories[toppingCategory]}</h4>
        {this.renderToppingInputs(toppingCategories[toppingCategory], topping)}
      </div>
    ));
  }
  render() {
    const toppingCategories = ["Crust", "Cheeses", "Meats", "Veggies"];
    let pizzaToppings = [
      this.state.pizza.crust,
      this.state.pizza.cheeses,
      this.state.pizza.meats,
      this.state.pizza.veggies
    ];
    return (
      <section className="pizzaView">
        <div className="pizzaView__description">
          <h2>{this.state.pizza.name}</h2>
          <h3>{this.state.pizza.description}</h3>
          <h3>{this.state.pizza.pizzams}</h3>
        </div>
        <form className="pizzaView__toppings">
          {this.renderToppings(pizzaToppings, toppingCategories)}
        </form>
      </section>
    );
  }
}

export default PizzaView;
