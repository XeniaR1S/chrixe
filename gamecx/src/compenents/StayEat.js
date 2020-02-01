import React from 'react';
import { Link } from 'react-router-dom'
import dracula from '../img/dracula.jpg'
import '../App.css';

class StayEat extends React.Component {
  render (){
    return (
      <div className="stay-eat">
        <figure className='figure-dracula'>
          <img className='img-dracula' src={dracula} alt='dracula'/>
        </figure>
        <p>
          Je sais, tu avais faim. Mais le propriétaire des lieux était lui aussi affamé. Face à Dracula en personne, tu n'as rien pu faire. Tu es mort, vidé de ton sang. 
        </p>
        <p>
          Tu veux ré-essayer ?
        </p>
        <Link to="/">Recommencer</Link>
      </div>
    );
  }
}

export default StayEat;