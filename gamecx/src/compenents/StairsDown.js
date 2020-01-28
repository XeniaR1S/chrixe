import React from 'react';
import '../App.css';
import hell from '../img/enfer.jpg'

class StairsDown extends React.Component {
  render (){
    return (
      <div className="stairs-down">
        <figure className='figure-hell'>
          <img className='img-hell' src={hell} alt='Enfer'/>
        </figure>
        Stairs down
      </div>
    );
  }
}

export default StairsDown;