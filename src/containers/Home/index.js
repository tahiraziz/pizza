import React, { Component } from 'react';
import Hero from '../../containers/Hero';
import pizzapic from '../../img/pizza.jpeg';
import PizzaSuggestions from '../../containers/PizzaSuggestions';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <Hero url={pizzapic}/>
        <PizzaSuggestions/>
      </div>
    );
  }
}

export default Home;
