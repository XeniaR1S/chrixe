import React from 'react';
import { Link } from 'react-router-dom'
import '../App.css';

class GoOut extends React.Component {
  render (){
    return (
      <div className="go-out">
        Tu as eu de la chance cette fois.. C'étais le château de Dracula himself.
        Allez, continue
        <Link to="/stairsdown">Continuer</Link>
      </div>
    );
  }
}

export default GoOut;