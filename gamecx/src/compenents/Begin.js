import React from 'react';
import { Link } from 'react-router-dom'
import cabane from '../img/cabane.jpg'
import '../App.css';


class Begin extends React.Component {
  render (){
    return (
      <div className="begin">
        <figure className='figure-cabane'>
          <img className='img-cabane' src={cabane} alt='cabane'/>
        </figure>
        <Link to="/whitedoor">Porte blanche</Link>
        <Link to="/olddoor">Porte en bois</Link>
      </div>
    );
  }
}

export default Begin;