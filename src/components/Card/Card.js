import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <li className='Card'>
        <img
          src={this.props.data.sprites.front_default}
          alt={this.props.data.name}
        />
        <p>
          <strong>Nombre: </strong>
          {this.props.data.name}
        </p>
        <p>
          <strong>Tipo: </strong>
          {this.props.data.types[0].type.name}
        </p>
      </li>
    );
  }
}

export default Card;
