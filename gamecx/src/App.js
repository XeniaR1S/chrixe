import React from 'react';

import {Switch, Route} from 'react-router-dom';
import Home from './compenents/Home';
import Begin from './compenents/Begin';

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/begin' component={Begin}/>
        <Route exact path='/' component={Home}/>
        <Route exact path='/' component={Home}/>
        <Route exact path='/' component={Home}/>
        <Route exact path='/' component={Home}/>
        <Route exact path='/' component={Home}/>
        <Route exact path='/' component={Home}/>
        <Route exact path='/' component={Home}/>
        <Route exact path='/' component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
