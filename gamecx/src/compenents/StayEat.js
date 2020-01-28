import React from 'react';
import dracula from '../img/dracula.jpg'
import '../App.css';

class StayEat extends React.Component {
  render (){
    return (
      <div className="stay-eat">
        <figure className='figure-dracula'>
          <img className='img-dracula' src={dracula} alt='dracula'/>
        </figure>
        Stay Eat
      </div>
    );
  }
}

export default StayEat;