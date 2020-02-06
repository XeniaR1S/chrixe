import React from 'react';
import flammes from '../img/flammesEnfer.jpg';
import '../App.css';
import { Link } from 'react-router-dom';

class DoorOutOfHellOld extends React.Component {
  render() {
    return (
      <div className="door-out-of-hell-old begin">
        <div className="card">
          <figure className="figureCard">
            <img
              className="img-flammes imgCard"
              src={flammes}
              alt="Honey Dukes Sous-sol"
            />
          </figure>
          <p className="textCard">
            Hé oui, tu es mort. Le coup de la belle porte qui mène à un endroit
            pas cool, pas à chaque fois hein.
          </p>
          <div className="choiceDoor">
            <Link className="linkTo" to="/begin">
              RENAIS DE TES CENDRES
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default DoorOutOfHellOld;
