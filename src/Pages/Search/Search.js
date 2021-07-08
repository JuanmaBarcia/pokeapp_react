import React, { useCallback, useContext } from "react";
import "./Search.css";

import { debounce } from "lodash";
import { appContext } from "../../context/appContext";

import Card from "../ListaPokemon/Card";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: "8px 0",
      width: "100%",
    },
  },
}));

function Search() {
  const classes = useStyles();
  const { getPokeInfo, pokeList, pokeCard } = useContext(appContext);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedFetch = useCallback(debounce(getPokeInfo, 1000), [pokeList]);

  const handleChange = async (e) => {
    const input = e.target.value;

    if (input.length !== 0) {
      debouncedFetch(input);
    }
  };

  return (
    <div className='Search'>
      <h1>Busca tu pokemon favorito</h1>
      <form className={classes.root} noValidate autoComplete='off'>
        <TextField
          name='pokemon'
          onChange={handleChange}
          id='standard-basic'
          label='Nombre'
        />
      </form>

      {Object.entries(pokeCard).length !== 0 && (
        <>
          <h3>Última búsqueda:</h3>
          <Card data={pokeCard} />
        </>
      )}
    </div>
  );
}

export default Search;
