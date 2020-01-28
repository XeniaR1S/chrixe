import React from 'react';
import { Link } from 'react-router-dom'

import alley from '../img/alleeEmbrumes.jpg'
import '../App.css';

class Right extends React.Component {
  render (){
    return (
      <div className="right">
        <figure className='figure-alley'>
          <img className='img-alley' src={alley} alt='alley'/>
        </figure>
        <Link to="/doorboo">Porte à fleurs</Link>
        <Link to="/doorjapanese">Porte Japonaise</Link>
      </div>
    );
  }
}

export default Right;