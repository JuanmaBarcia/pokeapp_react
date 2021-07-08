import React from "react";
import "./Card.css";

import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import CardUI from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
  },
});

function Card(props) {
  const classes = useStyles();

  return (
    <CardUI className={`Card ${classes.root}`}>
      <CardActionArea component={Link} to={`/pokemon/${props.data.id}`}>
        <CardMedia
          component='img'
          alt={`imagen ${props.data.name}`}
          // height='140'
          image={props.data.image}
          title={`imagen ${props.data.name}`}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {props.data.name.toUpperCase()}
          </Typography>
        </CardContent>
      </CardActionArea>
    </CardUI>
  );
}

export default Card;
