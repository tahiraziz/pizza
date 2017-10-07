import React, { Component } from 'react';
import './PizzaList.css';
import Pizza from '../../components/Pizza'

class PizzaList extends Component {
    render() {
        return (
            <div>
                <Pizza/>
            </div>           
        );
    }
}
export default PizzaList;