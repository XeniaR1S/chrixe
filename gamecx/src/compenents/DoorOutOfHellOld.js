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
        <p>
        Hé oui, tu es mort. Le coup de la belle porte qui mène à un endroit pas cool, pas à chaque fois hein.
        </p>
      </div>
    );
  }
}

export default DoorOutOfHellOld;