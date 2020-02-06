import React from 'react';
import detraqueurs from '../img/detraqueurs.png';
import '../App.css';
import { Link } from 'react-router-dom';

class TakeWand extends React.Component {
  render() {
    return (
      <div className="take-wand begin">
        <div className="card">
          <figure className="figureCard">
            <img
              className="img-detraqueurs imgCard"
              src={detraqueurs}
              alt="detraqueurs"
            />
          </figure>
          <p className="textCard">
            Tu récupère ta baguette. Vous décollez. Quelques instant plus tard,
            une horde de détraqueurs se dresse devant vous. Mais.. Tu ne sais
            toujours pas te servir d'une baguette ! Tu meurs sous le baiser des
            détraqueurs. Hemione aura le temps de s'enfuir. Tu auras au moins le
            mérite d'avoir fait une bonne diversion.
          </p>
          <div className="choiceDoor">
            <Link to="/begin">RETENTE TA CHANCE MOLDU</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default TakeWand;
