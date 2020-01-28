import React from 'react';
import { Link } from 'react-router-dom'

import tranchee from '../img/tranchee.jpg'
import '../App.css';

class DoorBoo extends React.Component {
  render (){
    return (
      <div className="door-boo">
        <figure className='figure-tranchee'>
          <img className='img-tranchee' src={tranchee} alt='Honey Dukes Sous-sol'/>
        </figure>
        IF
        IF 
        IF 
        <Link to="/doorjapanese">Vite ! C'est pas ma guerre putain</Link>
      </div>
    );
  }
}

export default DoorBoo;