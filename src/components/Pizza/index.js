import React, { Component } from "react";
import "./Pizza.css";

class Pizza extends Component {
  render() {
    return (
      <div>
        <p>{this.props.highlights.name}</p>
        <p>{this.props.highlights.description}</p>
        <p>{this.props.highlights.pizzams} Pizzams</p>
      </div>
    );
  }
}
export default Pizza;
