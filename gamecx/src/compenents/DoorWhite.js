import React from 'react';
import { Link } from 'react-router-dom'
import crypte from '../img/crypte.png'
import '../App.css';


class DoorWhite extends React.Component {
  render (){
    return (
      <div className="door-white begin">
        <div className='card'>
          <img className='img-crypte imgCard' src={crypte} alt='crypte'/>
        
        <p className="textCard">
          Tu atteris dans une petite crypte. Il fait sombre. La seul lumière vient d'une torche accrochée sur un mur à ta droite. En face de toi, deux escaliers en colimaçon taillés dans la pierre. L'un monte l'autre descend, lequel vas-tu emprunter ? 
                  </p>
                  </div>

        <div className="choiceDoor">

        <Link className="linkTo" to="/stairsup">Monter</Link>
        <Link className="linkTo" to="/stairsdown">Descendre</Link>
        </div>
      </div>
    );
  }
}

export default DoorWhite;