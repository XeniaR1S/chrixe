import React from 'react';
import { Link } from 'react-router-dom';
import end from '../img/end.jpg';
import '../App.css';

class End extends React.Component {
  render() {
    return (
      <div className="door-boo begin">
        <div className="card">
          <figure className="figureCard">
            <img className="img-end imgCard" src={end} alt="fin" />
          </figure>
          <p className="textCard">
            Vous pouvez désormais voler vers d'autres aventures. A suivre.. Tu
            peux également explorer toutes les issues en{' '}
            <Link to="/begin">recommencant le jeu </Link>
          </p>
        </div>
      </div>
    );
  }
}

export default End;
