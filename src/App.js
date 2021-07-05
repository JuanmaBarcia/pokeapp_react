import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card";
import axios from "axios";

function App() {
  const [pokemon, setPokemon] = useState("");
  const [pokeCard, setPokeCard] = useState({});

  useEffect(() => {
    if (pokemon !== "") {
      getPokeInfo(pokemon);
    }
  }, [pokemon]);

  const getPokeInfo = async (name) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const pokeInfo = res.data;
    await setPokeCard(pokeInfo);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await setPokemon(e.target.pokemon.value.toLowerCase());
    e.target.reset();
  };

  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <input type='text' name='pokemon' />
        <button type='submit'>Enviar</button>
      </form>
      {/* {console.log(pokeCard)} */}
      {Object.keys(pokeCard).length !== 0 ? <Card data={pokeCard} /> : ""}
    </div>
  );
}

export default App;
