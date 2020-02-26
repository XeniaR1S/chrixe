import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class GoOut extends React.Component {
  render() {
    return (
      <div className="go-out begin">
        <div className="card">
          <p className="textCard">
            Tu as eu de la chance cette fois.. C'étais le château de Dracula
            himself. Allez, continue !
          </p>
          <div className="choiceDoor">
            <Link className="linkTo" to="/stairsdown">Continuer</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default GoOut;
