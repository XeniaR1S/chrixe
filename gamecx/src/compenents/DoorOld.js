import React from 'react';
import { Link } from 'react-router-dom';

import honeydukesSousol from '../img/honeydukesSousol.jpg';
import '../App.css';

class DoorOld extends React.Component {
  render() {
    return (
      <div className="door-old begin">
        <div className="card">
          <figure className="figureCard ">
            <img
              className="img-honeydukesSousol imgCard"
              src={honeydukesSousol}
              alt="Honey Dukes Sous-sol"
            />
          </figure>
          {/* SET STATE */}
          <p className="textCard">
            La porte en bois rouillée mène à Honeyducks, dans la réserve pleine
            d'objets. Une pierre noire est posée sur un piédestal, possibilité
            de la prendre ou non.
          </p>
          <div className="choiceDoor">
            <Link className="linkTo" to="/honeydukes">
              Oui !
            </Link>
            <Link className="linkTo" to="/honeydukes">
              Euh.. Non
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default DoorOld;
