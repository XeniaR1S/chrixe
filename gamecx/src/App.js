import React from 'react';
import './App.css';
import Begin from './compenents/Begin';
import StairsDown from './compenents/StairsDown';
import DoorWhite from './compenents/DoorWhite';
import Right from './compenents/Right';
import DoorJapanese from './compenents/DoorJapanese';
import Left from './compenents/Left';
import StairsUp from './compenents/StairsUp';
import StayEat from './compenents/StayEat';
import DoorOld from './compenents/DoorOld';
import DontHug from './compenents/DontHug';
import Hug from './compenents/Hug';

function App() {
  return (
    <div className="App">
      <Begin/>
      <DoorWhite/>
      <DoorOld/>
      <StairsUp/>
      <StairsDown/>
      <StayEat/>
      <DontHug/>
      <Hug/>
      <Left/>
      <Right/>
      <DoorJapanese/>
    </div>
  );
}

export default App;
