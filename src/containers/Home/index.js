import React, { Component } from "react";
import Hero from "../../components/Hero";
import Container from "../../containers/Container";
import pizzapic from "../../img/pizza.jpeg";
import "./Home.css";
import PizzaList from "../../components/PizzaList/index";

class Home extends Component {
  // Initialize Cloud Firestore through Firebase
  render() {
    return (
      <div>
        <Hero
          url={pizzapic}
          title="Pizzam"
          subtitle="The social feed and ordering spot for pizza."
        />
        <Container title="The trendiest pizzas 🍕" content={<PizzaList />} />
      </div>
    );
  }
}

export default Home;
