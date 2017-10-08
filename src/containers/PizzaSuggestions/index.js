import React, { Component } from 'react';
import './PizzaSuggestions.css';
import {Link} from 'react-router-dom';
import PizzaList from '../PizzaList'

class PizzaSuggestions extends Component {
    render() {
        return (
            <div>
                <h2>Create custom pizzas and order custom pizzas that other pizza connoisseurs have created!</h2>
                <br/>
                <PizzaList/>
                <br/>
                <button className="create_own_pizza"><Link to="/create">Create a Pizza!</Link></button>
            </div>           
        );
    }
}
export default PizzaSuggestions;