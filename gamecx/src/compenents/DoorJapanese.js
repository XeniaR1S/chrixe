import React from 'react';
import { Link } from 'react-router-dom';

import azkaban from '../img/azkaban.png';
import '../App.css';

class DoorJapanese extends React.Component {
  render() {
    return (
      <div className="door-japanese begin">
        <div className="card">
          <figure className="figureCard">
            <img className="img-azkaban imgCard" src={azkaban} alt="azkaban" />
          </figure>
          <p className="textCard">
            Une porte coulissante à l'allure japonaise se trouve un peu loin,
            une sorte de brume s'en échappe, vous éprouvez comme un sentiment de
            bonheur vous quitter, pourtant vous prenez le risque d'entrer. A
            votre plus grand étonnement vous atterrissez à Azkaban, la fameuse
            prison de sorciers. Vous vous trouvez dans une cellule lugubre.
            Hermione Granger la célèbre sorcière est enfermée avec vous, elle
            vous explique les raisons qui l'ont menées ici. L'aides-tu à
            s'évader ?
          </p>
          <div className="choiceDoor">
            <Link className="linkTo" to="/help">
              Bien sûr que je l'aide !
            </Link>
            <Link className="linkTo" to="/donthelp">
              Non, elle est devenue cinglée !
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default DoorJapanese;
