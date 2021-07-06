import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card";
import ListaPokemon from "./components/ListaPokemon/ListaPokemon";
import axios from "axios";

function App() {
  const [pokemon, setPokemon] = useState("");
  const [pokeCard, setPokeCard] = useState({});
  const [pokeList, setPokeList] = useState([]);

  useEffect(() => {
    if (pokemon !== "") {
      getPokeInfo(pokemon);
    }
  }, [pokemon]);

  useEffect(async () => {
    if (pokeList.length === 0 && Object.keys(pokeCard).length !== 0) {
      await setPokeList([pokeCard]);
    } else if (pokeList.length !== 0 && Object.keys(pokeCard).length !== 0) {
      await setPokeList([...pokeList, pokeCard]);
    }
  }, [pokeCard]);

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
        <label htmlFor='pokemon'>Busca tu pokemon favorito</label>
        <input type='text' name='pokemon' />
        <button type='submit'>Enviar</button>
      </form>
      {Object.keys(pokeCard).length !== 0 ? (
        <>
          <h2>Resultado de la busqueda</h2>
          <ul>
            <Card data={pokeCard} />
          </ul>
        </>
      ) : (
        ""
      )}
      {pokeList.length > 0 ? <ListaPokemon data={pokeList} /> : ""}
    </div>
  );
}

export default App;
