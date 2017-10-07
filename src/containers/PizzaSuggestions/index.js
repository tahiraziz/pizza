import React, { Component } from 'react';
import './PizzaSuggestions.css';
import PizzaList from '../PizzaList'

class PizzaSuggestions extends Component {
    render() {
        return (
            <div>
                <h2>Here, you can see what custom pizzas people get and order them! Create your own pizza too! </h2>
                <br/>
                <PizzaList/>
                <br/>
                <button className="create_own_pizza">Create a Pizza!</button>
            </div>           
        );
    }
}
export default PizzaSuggestions;