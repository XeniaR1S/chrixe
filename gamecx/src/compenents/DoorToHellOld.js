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
        <p>
        Il fait tout de suite un peu moins chaud. Chut, il y a quelqu'un qui arrive. C'est Perséphone, déesse des enfers et compagne d'Hadès. Elle s'ennuie dans les enfers. "Veux-tu que l'on passe quelques heures à deux ?"
        </p>
        <Link to="/hug">Oui, grave</Link>
        <Link to="/donthug">Non, franchement t'es pas ouf</Link>
      </div>
    );
  }
}

export default DoorToHellOld;