import React from 'react';
import { Link } from 'react-router-dom'
import crypte from '../img/crypte.png'
import '../App.css';


class DoorWhite extends React.Component {
  render (){
    return (
      <div className="door-white">
        <figure className='figure-crypte'>
          <img className='img-crypte' src={crypte} alt='crypte'/>
        </figure>
        <Link to="/stairsup">Monter</Link>
        <Link to="/stairsdown">Descendre</Link>
      </div>
    );
  }
}

export default DoorWhite;