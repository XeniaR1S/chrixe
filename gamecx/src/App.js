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
import DoorToHell from './compenents/DoorToHellOld';
import Exit from './compenents/DoorToExit';
import Hug from './compenents/Hug';
import DontHug from './compenents/DontHug';
import OutHellWhite from './compenents/DoorOutOfHellWhite';
import OutHellOld from './compenents/DoorOutOfHellOld';
import HoneyDukes from './compenents/HoneyDukes';
import Left from './compenents/Left';
import Right from './compenents/Right';
import DoorBoo from './compenents/DoorBoo';
import DoorJapanese from './compenents/DoorJapanese';
import Help from './compenents/Help';
import DontHelp from './compenents/DontHelp';
import TakeWand from './compenents/TakeWand';
import DontTakeWand from './compenents/DontTakeWand';


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
        <Route exact path='/doortohell' component={DoorToHell}/>
        <Route exact path='/exit' component={Exit}/>
        <Route exact path='/hug' component={Hug}/>
        <Route exact path='/donthug' component={DontHug}/>
        <Route exact path='/outhellwhite' component={OutHellWhite}/>
        <Route exact path='/outhellold' component={OutHellOld}/>
        <Route exact path='/honeydukes' component={HoneyDukes}/>
        <Route exact path='/left' component={Left}/>
        <Route exact path='/right' component={Right}/>
        <Route exact path='/doorboo' component={DoorBoo}/>
        <Route exact path='/doorjapanese' component={DoorJapanese}/>
        <Route exact path='/help' component={Help}/>
        <Route exact path='/donthelp' component={DontHelp}/>
        <Route exact path='/takewand' component={TakeWand}/>
        <Route exact path='/donttakewand' component={DontTakeWand}/>

        <Route exact path='/doorboo' component={DoorBoo}/>
        <Route exact path='/doorjapanese' component={DoorJapanese}/>
        <Route exact path='/exit' component={Exit}/>
      </Switch>
    </div>
  );
}

export default App;
