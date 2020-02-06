import React from 'react';
import { Link } from 'react-router-dom';
import banquet from '../img/banquet.jpeg';
import '../App.css';

class StairsUp extends React.Component {
  render() {
    return (
      <div className="stairs-up begin">
        <div className="card">
          <figure className="figureCard">
            <img className="img-banquet imgCard" src={banquet} alt="banquet" />
          </figure>
          <p className="textCard">
            Te voilà dans une immense salle à manger. Dans le fond de la pièce,
            une cheminée crépite. L'ambiance est assez chaleureuse. Une grande
            table siège au milieu de la salle. Elle regorge de mets qui ont
            l'air plus délicieux les uns que les autres. Que fais-tu ?
          </p>
        </div>
        <div className="choiceDoor">
          <Link className="linkTo" to="/stay">
            Rester manger
          </Link>
          <Link className="linkTo" to="/goout">
            Partir vite
          </Link>
        </div>
      </div>
    );
  }
}

export default StairsUp;
