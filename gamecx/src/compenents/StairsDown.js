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
        <Link to="/doortohell">Porte en fer forgé</Link>
        <Link to="/exit">Sortie de secours</Link>
      </div>
    );
  }
}

export default StairsDown;