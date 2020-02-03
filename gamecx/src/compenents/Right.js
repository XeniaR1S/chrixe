import React from 'react';
import { Link } from 'react-router-dom'

import alley from '../img/alleeEmbrumes.jpg'
import '../App.css';

class Right extends React.Component {
  render (){
    return (
      <div className="right">
        <figure className='figure-alley'>
          <img className='img-alley' src={alley} alt='alley'/>
        </figure>
        <p>
        Dans la boutique d'Honeyducks, tu trouves une porte à droite qui te mène dans l'allée des embrumes, un endroit malfamé où on rencontre tous les mauvais sorciers
        </p>
        <Link to="/doorboo">Porte à fleurs</Link>
        <Link to="/doorjapanese">Porte Japonaise</Link>
      </div>
    );
  }
}

export default Right;