import React from 'react';
import { Link } from 'react-router-dom';

import alley from '../img/alleeEmbrumes.jpg';
import '../App.css';

class Right extends React.Component {
  render() {
    return (
      <div className="right begin">
        <div className="card">
          <figure className="figureCard">
            <img className="img-alley imgCard" src={alley} alt="alley" />
          </figure>
          <p className="textCard">
            Dans la boutique d'Honeyducks, tu trouves une porte à droite qui te
            mène dans l'allée des embrumes, un endroit malfamé où on rencontre
            tous les mauvais sorciers
          </p>
          <div className="choiceDoor">
            <Link className="linkTo" to="/doorboo">
              Porte à fleurs
            </Link>
            <Link className="linkTo" to="/doorjapanese">
              Porte Japonaise
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Right;
