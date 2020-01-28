import React from 'react';
import banquet from '../img/banquet.jpeg'
import '../App.css';

class StairsUp extends React.Component {
  render (){
    return (
      <div className="stairs-up">
        <figure className='figure-banquet'>
          <img className='img-banquet' src={banquet} alt='banquet'/>
        </figure>
        Stairs up
      </div>
    );
  }
}

export default StairsUp;