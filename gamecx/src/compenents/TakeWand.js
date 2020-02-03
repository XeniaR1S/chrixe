import React from 'react';
import detraqueurs from '../img/detraqueurs.png'
import '../App.css';

class TakeWand extends React.Component {
  render (){
    return (
      <div className="take-wand">
        <figure className='figure-detraqueurs'>
          <img className='img-detraqueurs' src={detraqueurs} alt='detraqueurs'/>
        </figure>
        <p>
        Tu récupère ta baguette. Vous décollez. Quelques instant plus tard, une horde de détraqueurs se dresse devant vous. Mais.. Tu ne sais toujours pas te servir d'une baguette ! Tu meurs sous le baiser des détraqueurs. Hemione aura le temps de s'enfuir. Tu auras au moins le mérite d'avoir fait une bonne diversion.
        </p>
      </div>
    );
  }
}

export default TakeWand;