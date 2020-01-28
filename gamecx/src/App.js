import React from 'react';
import Home from './compenents/Home';
import Begin from './compenents/Begin';
import { Route, Switch } from "react-router-dom";

import './App.css';
import End from './compenents/End';

function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/begin" component={Begin}/>
    </Switch>
    </div>
  );
}

export default App;
