import React, { useState, useEffect } from "react";
import "./Details.css";

import axios from "axios";
import { useLocation } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
  },
});

function Details(props) {
  const classes = useStyles();

  const [pokeCard, setPokeCard] = useState({});

  useEffect(() => {
    getPokeInfo(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const location = useLocation();
  const url = location.pathname.split("/");
  const id = url[url.length - 1];

  const getPokeInfo = async (id) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokeInfo = res.data;
    setPokeCard(pokeInfo);
  };
  console.log(pokeCard);

  let types = [];

  if (Object.entries(pokeCard).length !== 0) {
    types = pokeCard.types.map((type, i) => <li key={i}>{type.type.name}</li>);
  }
  return (
    <>
      <h1>Detalles del Pokemon</h1>
      {Object.entries(pokeCard).length !== 0 && (
        <Card className={`Details ${classes.root}`}>
          <CardActionArea>
            <CardMedia
              component='img'
              alt={`imagen ${pokeCard.name}`}
              // height='140'
              image={
                pokeCard.sprites.other["official-artwork"].front_default ||
                pokeCard.image
              }
              title={`imagen ${pokeCard.name}`}
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                {pokeCard.name.toUpperCase()}
              </Typography>
              <Typography gutterBottom variant='h6' component='h3'>
                Tipo:
                {types.map((type) => type)}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      )}
    </>
  );
}

export default Details;
