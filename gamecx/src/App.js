import React from 'react';

import {Switch, Route} from 'react-router-dom';
import Home from './compenents/Home';
import Begin from './compenents/Begin';
import WhiteDoor from './compenents/DoorWhite';
import OldDoor from './compenents/DoorOld';
import StairsUp from './compenents/StairsUp';
import StairsDown from './compenents/StairsDown';
import StayEat from './compenents/StayEat';
import GoOut from './compenents/GoOut';

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/begin' component={Begin}/>
        <Route exact path='/whitedoor' component={WhiteDoor}/>
        <Route exact path='/olddoor' component={OldDoor}/>
        <Route exact path='/stairsup' component={StairsUp}/>
        <Route exact path='/stairsdown' component={StairsDown}/>
        <Route exact path='/stay' component={StayEat}/>
        <Route exact path='/goout' component={GoOut}/>
        <Route exact path='/' component={Home}/>
        <Route exact path='/' component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
