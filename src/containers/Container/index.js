import React, { Component } from "react";
class Container extends Component {
  render() {
    return (
      <section className="container">
        <h3 className="container__title">{this.props.title}</h3>
        <div>{this.props.content}</div>
      </section>
    );
  }
}

export default Container;
