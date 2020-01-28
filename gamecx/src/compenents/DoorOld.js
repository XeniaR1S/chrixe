import React from 'react';
import honeydukesSousol from '../img/honeydukesSousol.jpg'
import '../App.css';

class DoorOld extends React.Component {
  render (){
    return (
      <div className="door-old">
        <figure className='figure-honeydukesSousol'>
          <img className='img-honeydukesSousol' src={honeydukesSousol} alt='Honey Dukes Sous-sol'/>
        </figure>
        Door Old
      </div>
    );
  }
}

export default DoorOld;