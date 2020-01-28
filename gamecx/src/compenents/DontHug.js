import React from 'react';
import cerbere from '../img/cerbere.jpg'
import '../App.css';

class DontHug extends React.Component {
  render (){
    return (
      <div className="dont-hug">
        <figure className='figure-cerbere'>
          <img className='img-cerbere' src={cerbere} alt='Cerbere'/>
        </figure>
        Dont Hug
      </div>
    );
  }
}

export default DontHug;