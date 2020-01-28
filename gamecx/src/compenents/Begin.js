import React from 'react';
import '../App.css';
import cabane from '../img/cabane.jpg'

class Begin extends React.Component {
  render (){
    return (
      <div className="begin">
        <figure className='figure-cabane'>
          <img className='img-cabane' src={cabane} alt='cabane'/>
        </figure>
        
        Begin
      </div>
    );
  }
}

export default Begin;