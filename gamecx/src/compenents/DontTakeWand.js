import React from 'react';
import detraqueurs from '../img/detraqueurs.png'
import '../App.css';

class DontTakeWand extends React.Component {
  render (){
    return (
      <div className="dont-take-wand">
        <figure className='figure-detraqueurs'>
          <img className='img-detraqueurs' src={detraqueurs} alt='detraqueurs'/>
        </figure>
        Dont Take Wand
      </div>
    );
  }
}

export default DontTakeWand;