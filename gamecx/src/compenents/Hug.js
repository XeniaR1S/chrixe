import React from 'react';
import portes from '../img/portes.png'
import '../App.css';

class Hug extends React.Component {
  render (){
    return (
      <div className="hug">
        <figure className='figure-portes'>
          <img className='img-portes' src={portes} alt='portes'/>
        </figure>
        Hug
      </div>
    );
  }
}

export default Hug;