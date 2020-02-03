import React from 'react';
import { Link } from 'react-router-dom'
import banquet from '../img/banquet.jpeg'
import '../App.css';

class StairsUp extends React.Component {
  render (){
    return (
      <div className="stairs-up">
        <figure className='figure-banquet'>
          <img className='img-banquet' src={banquet} alt='banquet'/>
        </figure>
        <p>
          Te voilà dans une immense salle à manger. Dans le fond de la pièce, une cheminée crépite. L'ambiance est assez chaleureuse. Une grande table siège au milieu de la salle. Elle regorge de mets qui ont l'air plus délicieux les uns que les autres. Que fais-tu ?
        </p>
        <Link to="/stay">Rester manger</Link>
        <Link to="/goout">Partir vite</Link>
      </div>
    );
  }
}

export default StairsUp;