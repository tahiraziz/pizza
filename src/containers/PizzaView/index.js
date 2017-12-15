import React, { Component } from "react";
import firebase from "../../firebase.js";
import { Link } from "react-router-dom";
import "./PizzaView.css";

export class PizzaView extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleOrder = this.handleOrder.bind(this);
    this.pizza = {};
    this.validOrder = false;
    this.state = {
      customPizza: {}
    };
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
      newPizza.id = newPizza.name.replace(" ", "");
      newPizza.pizzams = 0;
    } else {
      newPizza[category][name] = value;
    }
    this.setState({
      customPizza: newPizza
    });
  }
  resetState() {
    let resetPizza = {
      name: this.pizza.name,
      id: this.pizza.id,
      description: this.pizza.description,
      pizzams: this.pizza.pizzams,
      crust: this.pizza.crust,
      cheeses: this.pizza.cheeses,
      meats: this.pizza.meats,
      veggies: this.pizza.veggies
    };
    this.setState({
      customPizza: resetPizza
    });
  }
  arePizzasEqual() {
    //from http://adripofjavascript.com/blog/drips/object-equality-in-javascript.html
    // Create arrays of property names
    var aProps = Object.getOwnPropertyNames(this.pizza);
    var bProps = Object.getOwnPropertyNames(this.state.customPizza);

    // If number of properties is different,
    // objects are not equivalent
    if (aProps.length !== bProps.length) {
      return false;
    }

    for (var i = 0; i < aProps.length; i++) {
      var propName = aProps[i];

      // If values of same property are not equal,
      // objects are not equivalent
      if (this.pizza[propName] !== this.state.customPizza[propName]) {
        return false;
      }
    }

    // If we made it this far, objects
    // are considered equivalent
    return true;
  }
  hasNoCheese(cheeses) {
    let numCheeses = 0;
    for (let cheese in cheeses) {
      if (cheeses[cheese] === true) {
        numCheeses++;
      }
    }
    return numCheeses === 0;
  }
  handleOrder() {
    if (this.state.customPizza.name.trim() === "") {
      alert("Your pizza should have a really cool name. Fill it in m8.");
    } else if (this.state.customPizza.description.trim() === "") {
      alert(
        "Your pizza should have a really good description. Fill it out m8."
      );
    } else if (this.hasNoCheese(this.state.customPizza.cheeses) === true) {
      alert("You want a pizza with no cheese? Lame. Pick a cheese, or four.");
    } else {
      this.validOrder = true;
      if (this.arePizzasEqual() === true) {
        //update pizzams and send to firebase
        this.pizza.pizzams++;
        firebase
          .database()
          .ref("pizzas/" + this.pizza.id)
          .set(this.pizza);
      } else {
        let custom = this.state.customPizza;
        custom.pizzams++;
        firebase
          .database()
          .ref("pizzas/" + custom.id)
          .set(custom);
      }
    }
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
      let ogPizza = {
        name: pizza.name,
        id: pizza.id,
        description: pizza.description,
        pizzams: pizza.pizzams,
        crust: pizza.crust,
        cheeses: pizza.cheeses,
        meats: pizza.meats,
        veggies: pizza.veggies
      };
      this.pizza = ogPizza;
      this.setState({
        customPizza: newState
      });
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
    const nextLink =
      this.validOrder === true
        ? `/${this.props.match.params.pizzaId}/pizzam`
        : `/${this.props.match.params.pizzaId}`;
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
          <Link to={nextLink} onClick={this.handleOrder}>
            <input type="submit" value="Order 🍕" />
          </Link>
          <button onClick={this.resetState}>Reset Pizza</button>
        </form>
      </section>
    );
  }
}

export default PizzaView;
