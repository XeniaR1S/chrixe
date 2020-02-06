import React from 'react';
import { Link } from 'react-router-dom';
import detraqueurs from '../img/detraqueurs.png';
import '../App.css';

class DontTakeWand extends React.Component {
  render() {
    return (
      <div className="dont-take-wand begin">
        <div className="card">
          <figure className="figureCard">
            <img
              className="img-detraqueurs imgCard"
              src={detraqueurs}
              alt="detraqueurs"
            />
          </figure>
          <p className="textCard">
            Tu décides de lui laisser la baguette, c'est plus sûr. Quelques
            instant plus tard, une horde de détraqueurs se dresse devant vous.
            Bien heureusement, tu as fais confiance à Hermione en lui laissant
            ta baguette. Elle lance un patronus pour vous protéger et vous
            arrivez à vous enfuire.
          </p>

          <div className="choiceDoor">
            <Link to="/end">S'enfuire</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default DontTakeWand;
