import React from 'react';
import end from '../img/end.jpg'
import '../App.css';

class End extends React.Component {
  render (){
    return (
      <div className="door-boo">
        <figure className='figure-end'>
          <img className='img-end' src={end} alt='fin'/>
        </figure>
        End
      </div>
    );
  }
}

export default End;