import React, { Component } from 'react';
import Hero from '../Hero';
import ToppingChoices from '../../components/ToppingChoices'
import pizzapic2 from '../../img/pizza2.jpeg'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './CreatePizza.css';

class CreatePizza extends Component {
  render() {
    return (
        <div>
            <Hero url={pizzapic2}/>
            <h2>Create your pizza!</h2>
            <ToppingChoices/>
            <button onClick={()=> this.props.goHome()}>Go Back</button>
            <button onClick={()=> this.props.goReview()}>Review Order</button>
        </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    goHome: () => push('/'),
    goReview: () => push('/review')
}, dispatch)
export default connect(null,mapDispatchToProps)(CreatePizza);
