import React, { Component } from 'react';
import Hero from '../Hero';
import pizzapic2 from '../../img/pizza2.jpeg'
import {Link} from 'react-router-dom';
import './ReviewPizza.css';

class ReviewPizza extends Component {
  render() {
    return (
      <div>
        <Hero url={pizzapic2}/>
        <h2>Review your creation!</h2>
        <button><Link to='/create'>Back</Link></button>
        <button><Link to='/completed'>Submit</Link></button>
      </div>
    );
  }
}

export default ReviewPizza;
