import React, { Component } from "react";
import "./Pizza.css";

class Pizza extends Component {
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.crust}</p>
        <p>{this.props.cheeses}</p>
        <p>{this.props.meats}</p>
        <p>{this.props.veggies}</p>
      </div>
    );
  }
}
export default Pizza;
