import React from 'react';
import { Link } from 'react-router-dom'

import baguette from '../img/baguette.jpeg'
import '../App.css';

class Help extends React.Component {
  render (){
    return (
      <div className="help">
        <figure className='figure-baguette'>
          <img className='img-baguette' src={baguette} alt='baguette magique'/>
        </figure>
        <Link to="/donttakewand">Je lui laisse</Link>
        <Link to="/takewand">Je le récupère.. On ne sait jamais</Link>
      </div>
    );
  }
}

export default Help;