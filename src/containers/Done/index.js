import React, { Component } from "react";

export class Done extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="done">
        <h1 className="done__title">PIZZAM!</h1>
        <h2 className="done__subtitle">
          You just ordered a pizza that someone awesome designed.
        </h2>
      </div>
    );
  }
}

export default Done;
