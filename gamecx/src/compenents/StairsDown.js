import React from 'react';
import { Link } from 'react-router-dom'

import hell from '../img/enfer.jpg'
import '../App.css';


class StairsDown extends React.Component {
  render (){
    return (
      <div className="stairs-down">
        <figure className='figure-hell'>
          <img className='img-hell' src={hell} alt='Enfer'/>
        </figure>
        <p>
        Il fait une chaleur déconcertante ici. Les murs sont comme fait de lave en fusion. Attends.. Mais bien-sûr, nous sommes en enfer. Devant toi, une porte faite de bois sombre et de fer forgé. A ta gauche, une sortie de secours. Laquelle choisis-tu ?
        </p>
        <Link to="/doortohell">Porte en fer forgé</Link>
        <Link to="/exit">Sortie de secours</Link>
      </div>
    );
  }
}

export default StairsDown;