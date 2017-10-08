import React, { Component } from 'react';
import Hero from '../Hero';
import pizzapic2 from '../../img/pizza2.jpeg'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './CompletedOrder.css';

class CompletedOrder extends Component {
  render() {
    return (
      <div>
        <Hero url={pizzapic2}/>
        <h2>Thanks for ordering! You'll see your pizza on the home page so others can order it too!</h2>
        <h3> You ordered a </h3>
        <button onClick={()=> this.props.goHome()}>Go Home</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    goHome: () => push('/')
}, dispatch)
export default connect(null,mapDispatchToProps)(CompletedOrder);