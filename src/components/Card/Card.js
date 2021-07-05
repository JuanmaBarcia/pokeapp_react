import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <img
          src={this.props.data.sprites.front_default}
          alt={this.props.data.name}
        />
        <p>Nombre: {this.props.data.name}</p>
        <p>Tipo: {this.props.data.types[0].type.name}</p>
      </div>
    );
  }
}

export default Card;
