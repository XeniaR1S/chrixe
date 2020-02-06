import React from 'react';
import { Link } from 'react-router-dom';

import honeyDukes from '../img/honeyDukes.jpg';
import '../App.css';

class HoneyDukes extends React.Component {
  render() {
    return (
      <div className="honey-dukes begin">
        <div className="card">
          <figure className="figureCard">
            <img
              className="img-honeydukes imgCard"
              src={honeyDukes}
              alt="Honey Dukes"
            />
          </figure>
          <p className="textCard">
            Cette odeur de bonbons est tellement rassurante.. Mais tu ne sais
            toujours pas ce que tu fais dans ces mondes bizarres.. Il faut
            continuer d'avancer.
          </p>
          <div className="choiceDoor">
            <Link className="linkTo" to="/left">
              Gauche
            </Link>
            <Link className="linkTo" to="/right">
              Droite
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default HoneyDukes;
