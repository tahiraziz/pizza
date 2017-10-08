import React, { Component } from 'react';
import Hero from '../Hero';
import pizzapic2 from '../../img/pizza2.jpeg'
import {Link} from 'react-router-dom';
import './CreatePizza.css';

class CreatePizza extends Component {
  render() {
    return (
      <div>
        <Hero url={pizzapic2}/>
        <h2>Create your pizza!</h2>
        <button><Link to='/'>Back</Link></button>
        <button><Link to='/review'>Next</Link></button>
      </div>
    );
  }
}

export default CreatePizza;
