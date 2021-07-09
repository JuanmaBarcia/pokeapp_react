import React, { useState, useContext } from "react";
import "./Form.css";

import { useForm } from "react-hook-form";
import { appContext } from "../../context/appContext";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: "8px 0",
      width: "100%",
    },
  },
  formControl: {
    margin: "8px 0",
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function Form() {
  const classes = useStyles();
  const { addPokemon, pokeList } = useContext(appContext);

  const ids = pokeList.map((pokemon) => pokemon.id);
  const regex = "^(?!.*^" + ids.join("$|^") + "$).*$";
  const regexIDs = new RegExp(regex);

  const typesOne = [
    "Acero",
    "Agua",
    "Bicho",
    "Dragón",
    "Eléctrico",
    "Fantasma",
    "Fuego",
    "Hada",
    "Hielo",
    "Lucha",
    "Normal",
    "Planta",
    "Psíquico",
    "Siniestro",
    "Tierra",
    "Veneno",
    "Volador",
  ];

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  console.log(watch("typeOne"));
  console.log(typesOne);
  const typesTwo = typesOne.filter((tipo) => tipo !== watch("typeOne"));
  console.log(typesTwo);

  const onSubmit = (data) => addPokemon(data);

  return (
    <div className='Form'>
      <h1>Crea tu Pokemon</h1>
      <form
        className={classes.root}
        noValidate
        autoComplete='off'
        onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id='standard-number'
          label='ID'
          type='number'
          InputLabelProps={{
            shrink: true,
          }}
          {...register("id", { required: true, pattern: regexIDs })}
        />
        {errors.id
          ? errors.id.type === "required" && (
              <span className='error'>Este campo es requerido</span>
            )
          : ""}
        {errors.id
          ? errors.id.type === "pattern" && (
              <span className='error'>Este id ya existe</span>
            )
          : ""}
        <TextField
          id='standard-basic'
          label='Nombre'
          {...register("name", { required: true, minLength: 3 })}
        />
        {errors.name && errors.name.type === "required" && (
          <span className='error'>Este campo es requerido</span>
        )}
        {errors.name && errors.name.type === "minLength" && (
          <span className='error'>Tamaño mínimo 3 caracteres</span>
        )}
        <TextField
          id='standard-basic'
          label='Url Imagen'
          {...register("image", { required: true })}
        />
        {errors.image && <span className='error'>Este campo es requerido</span>}
        <FormControl className={classes.formControl}>
          <InputLabel id='demo-simple-select-label'>Tipo 1</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            {...register("typeOne", { required: true })}>
            {typesOne.map((type) => (
              <MenuItem value={type}>{type}</MenuItem>
            ))}
          </Select>
        </FormControl>
        {errors.typeOne && (
          <span className='error'>Este campo es requerido</span>
        )}
        <FormControl className={classes.formControl}>
          <InputLabel id='demo-simple-select-label'>Tipo 2</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            {...register("typeTwo")}>
            <MenuItem value={undefined}></MenuItem>
            {typesTwo.map((type) => (
              <MenuItem value={type}>{type}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button variant='contained' color='primary' type='submit'>
          Crear Pokemon
        </Button>
      </form>
    </div>
  );
}

export default Form;
