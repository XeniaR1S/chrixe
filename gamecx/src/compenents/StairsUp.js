import React from 'react';
import { Link } from 'react-router-dom'
import banquet from '../img/banquet.jpeg'
import '../App.css';

class StairsUp extends React.Component {
  render (){
    return (
      <div className="stairs-up">
        <figure className='figure-banquet'>
          <img className='img-banquet' src={banquet} alt='banquet'/>
        </figure>
        <Link to="/stay">Rester manger</Link>
        <Link to="/goout">Partir vite</Link>
      </div>
    );
  }
}

export default StairsUp;