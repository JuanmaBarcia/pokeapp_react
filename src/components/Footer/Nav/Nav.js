import React, { useState, useEffect } from "react";
import "./Nav.css";

import { Link, useLocation } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import SearchIcon from "@material-ui/icons/Search";
import ListIcon from "@material-ui/icons/List";
import CreateIcon from "@material-ui/icons/Create";

const useStyles = makeStyles({
  root: {
    // width: 500,
  },
});

export default function Nav() {
  const classes = useStyles();
  const [value, setValue] = useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/search") {
      setValue(0);
    } else if (location.pathname === "/") {
      setValue(1);
    } else if (location.pathname === "/new") {
      setValue(2);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='Nav'>
      <BottomNavigation
        value={value}
        onChange={handleChange}
        showLabels
        className={classes.root}>
        <BottomNavigationAction
          component={Link}
          to='/search'
          label='Busqueda'
          icon={<SearchIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to='/'
          label='Lista Pokemons'
          icon={<ListIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to='/new'
          label='Crear Pokemon'
          icon={<CreateIcon />}
        />
      </BottomNavigation>
    </div>
  );
}
