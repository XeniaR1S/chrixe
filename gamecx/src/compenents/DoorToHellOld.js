import React from 'react';
import { Link } from 'react-router-dom';

import persephone from '../img/persephone.jpg';
import '../App.css';

class DoorToHellOld extends React.Component {
  render() {
    return (
      <div className="door-to-hell-old begin">
        <div className="card">
          <figure className="figure-persephone figureCard">
            <img
              className="img-persephone imgCard"
              src={persephone}
              alt="persephone"
            />
          </figure>
          <p className="textCard">
            Il fait tout de suite un peu moins chaud. Chut, il y a quelqu'un qui
            arrive. C'est Perséphone, déesse des enfers et compagne d'Hadès.
            Elle s'ennuie dans les enfers. "Veux-tu que l'on passe quelques
            heures à deux ?"
          </p>
        </div>
        <div className="choiceDoor">
          <Link className="linkTo" to="/hug">
            Oui, grave
          </Link>
          <Link className="linkTo" to="/donthug">
            Non, pas ouf
          </Link>
        </div>
      </div>
    );
  }
}

export default DoorToHellOld;
