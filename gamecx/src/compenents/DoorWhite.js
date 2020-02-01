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
        <p>
          Tu atteris dans une petite crypte. Il fait sombre. La seul lumière vient d'une torche accrochée sur un mur à ta droite. En face de toi, deux escaliers en colimaçon taillés dans la pierre. L'un monte l'autre descend, lequel vas-tu emprunter ? 
                  </p>
        <Link to="/stairsup">Monter</Link>
        <Link to="/stairsdown">Descendre</Link>
      </div>
    );
  }
}

export default DoorWhite;