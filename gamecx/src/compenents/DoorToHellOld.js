import React from 'react';
import persephone from '../img/persephone.jpg'
import '../App.css';

class DoorToHellOld extends React.Component {
  render (){
    return (
      <div className="door-to-hell-old">
        <figure className='figure-persephone'>
          <img className='img-persephone' src={persephone} alt='persephone'/>
        </figure>
        Door To Hell Old
      </div>
    );
  }
}

export default DoorToHellOld;