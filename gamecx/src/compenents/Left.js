import React from 'react';
import { Link } from 'react-router-dom'

import ollivander from '../img/ollivander.jpg'
import '../App.css';

class Left extends React.Component {
  render (){
    return (
      <div className="left">
        <figure className='figure-ollivander'>
          <img className='img-ollivander' src={ollivander} alt='ollivander'/>
        </figure>
        SET STATE BAGUETTE
        <Link to="/right">Continuer</Link>
      </div>
    );
  }
}

export default Left;