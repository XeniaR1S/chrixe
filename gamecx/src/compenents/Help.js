import React from 'react';
import baguette from '../img/baguette.jpg'
import '../App.css';

class Help extends React.Component {
  render (){
    return (
      <div className="help">
        <figure className='figure-baguette'>
          <img className='img-baguette' src={baguette} alt='baguette magique'/>
        </figure>
        Help
      </div>
    );
  }
}

export default Help;