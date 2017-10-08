import React, { Component } from 'react';
import './PizzaSuggestions.css';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PizzaList from '../PizzaList'

class PizzaSuggestions extends Component {
    render() {
        return (
            <div>
                <h2>Create custom pizzas and order custom pizzas that other pizza connoisseurs have created!</h2>
                <br/>
                <PizzaList/>
                <br/>
                <button className="create_own_pizza" onClick={()=>this.props.goCreatePizza()}>Create a Pizza!</button>
            </div>           
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    goCreatePizza: () => push('/create')
}, dispatch)
export default connect(null,mapDispatchToProps)(PizzaSuggestions);