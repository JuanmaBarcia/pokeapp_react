import React from "react";
import "./Details.css";

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

  const name = new URLSearchParams(props.location.search).get("name");
  const image = new URLSearchParams(props.location.search).get("image");
  const typeOne = new URLSearchParams(props.location.search).get("typeOne");
  const typeTwo = new URLSearchParams(props.location.search).get("typeTwo");

  return (
    <>
      <h1>Detalles del Pokemon</h1>
      <Card className={`Details ${classes.root}`}>
        <CardActionArea>
          <CardMedia
            component='img'
            alt={`imagen ${name}`}
            // height='140'
            image={image}
            title={`imagen ${name}`}
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {name.toUpperCase()}
            </Typography>
            <Typography gutterBottom variant='h6' component='h3'>
              Tipo: {typeOne}
              {typeTwo ? <>{` / ${typeTwo}`}</> : ""}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}

export default Details;
