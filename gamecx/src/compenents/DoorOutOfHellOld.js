import React from 'react';
import flammes from '../img/flammesEnfer.jpg'
import '../App.css';

class DoorOutOfHellOld extends React.Component {
  render (){
    return (
      <div className="door-out-of-hell-old">
        <figure className='figure-flammes'>
          <img className='img-flammes' src={flammes} alt='Honey Dukes Sous-sol'/>
        </figure>
        Door Out Of Hell Old
      </div>
    );
  }
}

export default DoorOutOfHellOld;