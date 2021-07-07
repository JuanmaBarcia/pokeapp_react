import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import Card from "./components/Card";
import ListaPokemon from "./components/ListaPokemon/ListaPokemon";
import axios from "axios";
import { debounce } from "lodash";

function App() {
  const [pokemon, setPokemon] = useState("");
  const [pokeCard, setPokeCard] = useState({});
  const [pokeList, setPokeList] = useState([]);

  useEffect(() => {
    if (pokemon !== "") {
      getPokeInfo(pokemon);
    }
  }, [pokemon]);

  useEffect(() => {
    if (Object.keys(pokeCard).length !== 0) {
      setPokeList([...pokeList, pokeCard]);
    }
  }, [pokeCard]);

  const getPokeInfo = async (name) => {
    const list = pokeList.map((pokemon) => pokemon.name);
    if (!list.includes(name)) {
      if (name.length > 1) {
        const res = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
        );
        const pokeInfo = res.data;
        setPokeCard(pokeInfo);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPokemon(e.target.pokemon.value.toLowerCase());
    e.target.reset();
  };

  const debouncedFetch = useCallback(debounce(getPokeInfo, 1000), [pokeList]);

  const handleChange = async (e) => {
    const input = e.target.value;

    if (input.length !== 0) {
      debouncedFetch(input);
    }
  };

  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='pokemon'>Busca tu pokemon favorito</label>
        <input type='text' name='pokemon' onChange={handleChange} />
        {/* <button type='submit'>Enviar</button> */}
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
