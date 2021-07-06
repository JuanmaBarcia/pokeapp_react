import React from "react";
import "./ListaPokemon.css";
import Card from "../Card";

function ListaPokemon(props) {
  const renderCards = () =>
    props.data.map((pokemon, i) => <Card data={pokemon} key={i} />);

  return (
    <>
      <h2>Historial de busqueda</h2>
      <ul className='ListaPokemon'>{renderCards()}</ul>
    </>
  );
}

export default ListaPokemon;
