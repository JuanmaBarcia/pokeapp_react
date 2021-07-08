import React, { useContext } from "react";
import "./ListaPokemon.css";

import { appContext } from "../../context/appContext";

import Card from "./Card";

function ListaPokemon(props) {
  const { pokeList } = useContext(appContext);

  const renderCards = () =>
    pokeList.map((pokemon, i) => <Card data={pokemon} key={i} />).reverse();

  return (
    <div className='ListaPokemon'>
      <h1>Lista de Pokemons</h1>
      <ul>
        <ul className='ListaPokemon'>{renderCards()}</ul>
      </ul>
    </div>
  );
}

export default ListaPokemon;
