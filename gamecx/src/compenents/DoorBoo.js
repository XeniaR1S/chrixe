import React from 'react';
import tranchee from '../img/tranchee.jpg'
import '../App.css';

class DoorBoo extends React.Component {
  render (){
    return (
      <div className="door-boo">
        <figure className='figure-tranchee'>
          <img className='img-tranchee' src={tranchee} alt='Honey Dukes Sous-sol'/>
        </figure>
        Door Boo
      </div>
    );
  }
}

export default DoorBoo;