import React from 'react';
import { Link } from 'react-router-dom'
import detraqueurs from '../img/detraqueurs.png'
import '../App.css';

class DontTakeWand extends React.Component {
  render (){
    return (
      <div className="dont-take-wand">
        <figure className='figure-detraqueurs'>
          <img className='img-detraqueurs' src={detraqueurs} alt='detraqueurs'/>
        </figure>
        <p>
        Tu décides de lui laisser la baguette, c'est plus sûr. Quelques instant plus tard, une horde de détraqueurs se dresse devant vous. Bien heureusement, tu as fais confiance à Hermione en lui laissant ta baguette. Elle lance un patronus pour vous protéger et vous arrivez à vous enfuire. 
        <Link to="/end">S'enfuire</Link>
        </p>
      </div>
    );
  }
}

export default DontTakeWand;