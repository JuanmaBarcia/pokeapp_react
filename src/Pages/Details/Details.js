import React, { useState, useEffect, useContext } from "react";
import "./Details.css";

import { useLocation } from "react-router-dom";
import { appContext } from "../../context/appContext";

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

  const { pokeList } = useContext(appContext);
  const [pokeCard, setPokeCard] = useState({});

  useEffect(() => {
    getPokeInfo(pokeDetails);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const location = useLocation();
  const url = location.pathname.split("/");
  const id = url[url.length - 1];
  // eslint-disable-next-line eqeqeq
  const pokeDetails = pokeList.find((pokemon) => pokemon.id == id);

  const getPokeInfo = (data) => {
    setPokeCard(data);
  };

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
              image={pokeCard.image}
              title={`imagen ${pokeCard.name}`}
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                {pokeCard.name.toUpperCase()}
              </Typography>
              <Typography gutterBottom variant='h6' component='h3'>
                Tipo: {pokeCard.typeOne}
                {pokeCard.typeTwo ? <>{` / ${pokeCard.typeTwo}`}</> : ""}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      )}
    </>
  );
}

export default Details;
