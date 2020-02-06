import React from 'react';
import { Link } from 'react-router-dom';

import ollivander from '../img/ollivander.jpg';
import '../App.css';

class Left extends React.Component {
  render() {
    return (
      <div className="left begin">
        <div className="card">
          <figure className="figureCard">
            <img
              className="img-ollivander imgCard"
              src={ollivander}
              alt="ollivander"
            />
          </figure>
          {/* SET STATE BAGUETTE */}
          <p className="textCard">
            Escalier à gauche qui monte, tu sors de la boutique et rentre dans
            la boutique d'Ollivander le vendeur de baguette
          </p>
          <div className="choiceDoor">
            <Link to="/right">Continuer</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Left;
