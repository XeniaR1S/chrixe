import React from 'react';
import crypte from '../img/crypte.png'
import '../App.css';


class DoorWhite extends React.Component {
  render (){
    return (
      <div className="door-white">
        <figure className='figure-crypte'>
          <img className='img-crypte' src={crypte} alt='crypte'/>
        </figure>
        Door White 
      </div>
    );
  }
}

export default DoorWhite;