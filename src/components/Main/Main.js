import React from "react";
import "./Main.css";

import { Route, Switch } from "react-router-dom";

import Details from "../../Pages/Details";
import Form from "../../Pages/Form";
import ListaPokemon from "../../Pages/ListaPokemon";
import Search from "../../Pages/Search";

function Main() {
  return (
    <div className='Main'>
      <Switch>
        <Route path='/' component={ListaPokemon} exact />
        <Route path='/new' component={Form} />
        <Route path='/pokemon/:id' component={Details} />
        <Route path='/search' component={Search} />
      </Switch>
    </div>
  );
}

export default Main;
