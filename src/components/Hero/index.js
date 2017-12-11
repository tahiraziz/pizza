import React, { Component } from "react";
import "./Hero.css";

class Hero extends Component {
  render() {
    const styles = {
      backgroundImage: `url(${this.props.url})`
    };
    return (
      <section className="hero" style={styles}>
        <h1 className="hero__title">{this.props.title}</h1>
        <h2 className="hero__subtitle">{this.props.subtitle}</h2>
      </section>
    );
  }
}
export default Hero;
