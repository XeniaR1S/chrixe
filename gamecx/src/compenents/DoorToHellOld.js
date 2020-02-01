import React from 'react';
import { Link } from 'react-router-dom'

import persephone from '../img/persephone.jpg'
import '../App.css';

class DoorToHellOld extends React.Component {
  render (){
    return (
      <div className="door-to-hell-old">
        <figure className='figure-persephone'>
          <img className='img-persephone' src={persephone} alt='persephone'/>
        </figure>
        <Link to="/hug">Oui, grave</Link>
        <Link to="/donthug">Non, franchement t'es pas ouf</Link>
      </div>
    );
  }
}

export default DoorToHellOld;