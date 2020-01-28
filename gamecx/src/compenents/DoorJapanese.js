import React from 'react';
import azkaban from '../img/azkaban.png'
import '../App.css';

class DoorJapanese extends React.Component {
  render (){
    return (
      <div className="door-japanese">
        <figure className='figure-azkaban'>
          <img className='img-azkaban' src={azkaban} alt='azkaban'/>
        </figure>
        Door Japanese
      </div>
    );
  }
}

export default DoorJapanese;