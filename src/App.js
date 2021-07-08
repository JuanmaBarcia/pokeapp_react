import React, { useState, useEffect } from "react";
import "./App.css";

import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import { appContext } from "./context/appContext";

import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  // const [pokemon, setPokemon] = useState("");
  const [pokeCard, setPokeCard] = useState({});
  const [pokeList, setPokeList] = useState([]);

  useEffect(() => {
    if (Object.keys(pokeCard).length !== 0) {
      setPokeList([...pokeList, pokeCard]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokeCard]);

  // eslint-disable-next-line no-unused-vars
  const getPokeInfo = async (name) => {
    const list = pokeList.map((pokemon) => pokemon.name);
    if (!list.includes(name)) {
      if (name.length > 1) {
        const res = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
        );
        const pokeInfo = {
          id: res.data.id,
          name: res.data.name,
          image: res.data.sprites.other["official-artwork"].front_default,
          typeOne: res.data.types[0].type.name,
          typeTwo: res.data.types[1] ? res.data.types[1].type.name : undefined,
        };
        console.log(res.data);

        setPokeCard(pokeInfo);
      }
    }
  };

  const addPokemon = (newPokemon) => {
    setPokeCard(newPokemon);
  };

  const value = {
    pokeCard,
    setPokeCard,
    pokeList,
    setPokeList,
    getPokeInfo,
    addPokemon,
  };

  return (
    <div className='App'>
      <appContext.Provider value={value}>
        <BrowserRouter>
          <Main />
          <Footer />
        </BrowserRouter>
      </appContext.Provider>
    </div>
  );
}

export default App;
