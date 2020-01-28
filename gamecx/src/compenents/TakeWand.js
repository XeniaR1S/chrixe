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
        Take Wand
      </div>
    );
  }
}

export default TakeWand;