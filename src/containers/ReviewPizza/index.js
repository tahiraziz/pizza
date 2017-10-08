import React, { Component } from 'react';
import Hero from '../Hero';
import pizzapic2 from '../../img/pizza2.jpeg'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './ReviewPizza.css';

class ReviewPizza extends Component {
  render() {
    return (
      <div>
        <Hero url={pizzapic2}/>
        <h2>Review your creation!</h2>
        <button onClick={()=> this.props.goCreate()}>Go Back</button>
        <button onClick={()=> this.props.goCompleted()}>Place Order</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    goCreate: () => push('/create'),
    goCompleted: () => push('/completed')
}, dispatch)
export default connect(null,mapDispatchToProps)(ReviewPizza);