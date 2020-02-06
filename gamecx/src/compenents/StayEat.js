import React from 'react';
import { Link } from 'react-router-dom'
import dracula from '../img/dracula.jpg'
import '../App.css';

class StayEat extends React.Component {
  render (){
    return (
      <div className="stay-eat begin">
        <div className='card'>
          <img className='img-dracula imgCard' src={dracula} alt='dracula'/>
        <p className="textCard">
          Je sais, tu avais faim. Mais le propriétaire des lieux était lui aussi affamé. Face à Dracula en personne, tu n'as rien pu faire. Tu es mort, vidé de ton sang. 
        </p>
        </div>
        <p>
          Tu veux ré-essayer ?
        </p>
        <Link to="/">Recommencer</Link>
      </div>
    );
  }
}

export default StayEat;