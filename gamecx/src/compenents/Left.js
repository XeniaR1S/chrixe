import React from 'react';
import ollivander from '../img/ollivander.jpg'
import '../App.css';

class Left extends React.Component {
  render (){
    return (
      <div className="left">
        <figure className='figure-ollivander'>
          <img className='img-ollivander' src={ollivander} alt='ollivander'/>
        </figure>
        Left
      </div>
    );
  }
}

export default Left;