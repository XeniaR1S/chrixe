import React from 'react';
import { Link } from 'react-router-dom'

import honeydukesSousol from '../img/honeydukesSousol.jpg'
import '../App.css';

class DoorOld extends React.Component {
  render (){
    return (
      <div className="door-old">
        <figure className='figure-honeydukesSousol'>
          <img className='img-honeydukesSousol' src={honeydukesSousol} alt='Honey Dukes Sous-sol'/>
        </figure>
        {/* SET STATE */}
        <p>
        La porte en bois rouillée mène à Honeyducks, dans la réserve pleine d'objets. Une pierre noire est posée sur un piédestal, possibilité de la prendre ou non.
        </p>
        <Link to="/honeydukes">Oui !</Link>
        <Link to="/honeydukes">Euh.. Non</Link>
      </div>
    );
  }
}

export default DoorOld;