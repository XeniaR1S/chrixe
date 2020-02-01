import React from 'react';
import { Link } from 'react-router-dom'

import honeyDukes from '../img/honeyDukes.jpg'
import '../App.css';

class HoneyDukes extends React.Component {
  render (){
    return (
      <div className="honey-dukes">
        <figure className='figure-honeydukes'>
          <img className='img-honeydukes' src={honeyDukes} alt='Honey Dukes'/>
        </figure>
        <Link to="/left">Gauche</Link>
        <Link to="/right">Droite</Link>
      </div>
    );
  }
}

export default HoneyDukes;