import React, { Component } from "react";
import "./Pizza.css";

class Pizza extends Component {
  render() {
    return (
      <div>
        <p>{this.props.ingredients.name}</p>
        <p>{this.props.ingredients.crust}</p>
        <p>{this.props.ingredients.cheeses}</p>
        <p>{this.props.ingredients.meats}</p>
        <p>{this.props.ingredients.veggies}</p>
      </div>
    );
  }
}
export default Pizza;
