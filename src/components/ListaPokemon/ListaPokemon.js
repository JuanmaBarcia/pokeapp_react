import React from "react";
import "./ListaPokemon.css";
import Card from "../Card";

function ListaPokemon(props) {
  const renderCards = () =>
    props.data.map((pokemon) => <Card data={pokemon} />);

  return renderCards();
}

export default ListaPokemon;
