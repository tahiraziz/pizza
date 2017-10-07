import React, { Component } from 'react';
import pizzaPic from '../../img/pizza.jpeg';
import './Hero.css';

class Hero extends Component {
    render() {
        return (
            <img className="hero-image" alt="pizza" src={pizzaPic}/>
        );
    }
}
export default Hero;