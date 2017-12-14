import React, { Component } from "react";
import firebase from "../../firebase.js";
import "./PizzaView.css";

export class PizzaView extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleOrder = this.handleOrder.bind(this);
    this.state = {
      customPizza: {}
    };
    this.pizza = {};
  }
  handleInputChange(e, cat) {
    const target = e.target;
    const value =
      target.type === "checkbox" || target.type === "radio"
        ? target.checked
        : target.value;
    const name = target.type === "radio" ? target.value : target.name;
    let newPizza = this.state.customPizza;
    let category = cat.toLowerCase();
    if (cat === "Crust") {
      for (const crust in newPizza[category]) {
        if (crust === name) {
          newPizza[category][crust] = true;
        } else {
          newPizza[category][crust] = false;
        }
      }
    } else if (cat === "name" || cat === "description") {
      newPizza[category] = value;
    } else {
      newPizza[category][name] = value;
    }
    this.setState({
      customPizza: newPizza
    });
  }
  handleOrder() {}
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
        customPizza: newState
      });
      this.pizza = newState;
    });
  }
  renderToppingInputs(toppingCategory, topping) {
    let inputs = [];

    for (let choice in topping) {
      //male separate check for type=radio for crust
      if (toppingCategory === "Crust") {
        inputs.push(
          <label key={choice}>
            <input
              name={toppingCategory}
              value={choice}
              type="radio"
              checked={topping[choice] === true}
              onChange={e => this.handleInputChange(e, toppingCategory)}
            />
            {choice}
          </label>
        );
      } else {
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
      this.state.customPizza.crust,
      this.state.customPizza.cheeses,
      this.state.customPizza.meats,
      this.state.customPizza.veggies
    ];
    const pizzaName = Object.keys(this.state.customPizza)[0];
    const pizzaDesc = Object.keys(this.state.customPizza)[2];
    return (
      <section className="pizzaView">
        <div className="pizzaView__description">
          <h2>{this.state.customPizza.name}</h2>
          <h3>{this.state.customPizza.description}</h3>
          <label>
            {pizzaName}
            <textarea
              name={pizzaName}
              value={this.state.customPizza.name}
              onChange={e => this.handleInputChange(e, e.target.name)}
            />
          </label>
          <label>
            {pizzaDesc}
            <textarea
              name={pizzaDesc}
              value={this.state.customPizza.description}
              onChange={e => this.handleInputChange(e, e.target.name)}
            />
          </label>
          <h3>{this.state.customPizza.pizzams} Pizzams</h3>
        </div>
        <form className="pizzaView__toppings">
          {this.renderToppings(pizzaToppings, toppingCategories)}
          <input type="submit" value="Order 🍕" onClick={this.handleOrder} />
        </form>
      </section>
    );
  }
}

export default PizzaView;
