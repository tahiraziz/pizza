import React, { Component } from 'react';
import Hero from '../Hero';
import pizzapic2 from '../../img/pizza2.jpeg'
import {Link} from 'react-router-dom';
import './CompletedOrder.css';

class CompletedOrder extends Component {
  render() {
    return (
      <div>
        <Hero url={pizzapic2}/>
        <h2>Thanks for ordering! You'll see your pizza on the home page so others can order it too!</h2>
        <h3> You ordered a </h3>
        <button><Link to='/'>Home</Link></button>
      </div>
    );
  }
}

export default CompletedOrder;
