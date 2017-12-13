import React, { Component } from "react";
import Hero from "../../components/Hero";
import pizzapic from "../../img/pizza.jpeg";
import "./Home.css";
import { Link } from "react-router-dom";
import Pizza from "../../components/Pizza";
import firebase from "../../firebase.js";

class Home extends Component {
  constructor(props) {
    super(props);
    this.selectPizza = this.selectPizza.bind(this);
    this.state = {
      pizzas: []
    };
  }
  selectPizza(selection) {
    this.props.onPizzaSelection(selection);
  }
  componentDidMount() {
    const itemsRef = firebase.database().ref("pizzas");
    itemsRef.on("value", snapshot => {
      let pizzas = snapshot.val();
      let newState = [];
      for (let pizza in pizzas) {
        newState.push({
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
      <Link
        to={`/${pizza.name.replace(/" "/g, "")}`}
        key={pizza.name}
        onClick={() => this.selectPizza(pizza)}
      >
        <Pizza ingredients={pizza} />
      </Link>
    ));
    return (
      <section>
        <Hero
          url={pizzapic}
          title="Pizzam"
          subtitle="The social feed and ordering spot for pizza."
        />
        <div className="pizzaList">
          <h2 className="pizzaList__header">
            The trendiest pizzas
            <span role="img" aria-label="pizza emoji">
              🍕
            </span>
          </h2>
          {pizzas}
        </div>
      </section>
    );
  }
}

export default Home;
