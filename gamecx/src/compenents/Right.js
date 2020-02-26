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
            Tu te retrouves dans l'allée des embrumes, un endroit malfamé où on rencontre
            tous les mauvais sorciers.
            Une porte à l'allure attrayante, blanche avec des fleurs violettes
            se trouve dans l'allée, c'est la seule porte éclairée, elle a un
            côté rassurant. La seconde est une porte coulissante faite de bois clair et d'un papier couleur crème épais. On la croirais sortie tout droit d'un décor de film typiquement japonais.
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
