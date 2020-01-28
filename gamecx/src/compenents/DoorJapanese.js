import React from 'react';
import { Link } from 'react-router-dom'

import azkaban from '../img/azkaban.png'
import '../App.css';

class DoorJapanese extends React.Component {
  render (){
    return (
      <div className="door-japanese">
        <figure className='figure-azkaban'>
          <img className='img-azkaban' src={azkaban} alt='azkaban'/>
        </figure>
        <Link to="/help">Biensûr que je l'aide !</Link>
        <Link to="/donthelp">Non, elle est devenue cinglée !</Link>
      </div>
    );
  }
}

export default DoorJapanese;