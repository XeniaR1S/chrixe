import React from 'react';
import { Link } from 'react-router-dom'

import portes from '../img/portes.png'
import '../App.css';

class Hug extends React.Component {
  render (){
    return (
      <div className="hug">
        <figure className='figure-portes'>
          <img className='img-portes' src={portes} alt='portes'/>
        </figure>
        <Link to="/olddoor">La porte blanche !</Link>
        <Link to="/outhellold">La vieille porte!</Link>
      </div>
    );
  }
}

export default Hug;