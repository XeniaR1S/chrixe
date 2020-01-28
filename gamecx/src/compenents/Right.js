import React from 'react';
import alley from '../img/alleeEmbrumes.jpg'
import '../App.css';

class Right extends React.Component {
  render (){
    return (
      <div className="right">
        <figure className='figure-alley'>
          <img className='img-alley' src={alley} alt='alley'/>
        </figure>
        Right
      </div>
    );
  }
}

export default Right;