import React from 'react';
import { Link } from 'react-router-dom'
import end from '../img/end.jpg'
import '../App.css';

class End extends React.Component {
  render (){
    return (
      <div className="door-boo">
        <figure className='figure-end'>
          <img className='img-end' src={end} alt='fin'/>
        </figure>
        <p>
        Vous pouvez désormais voler vers d'autres aventures.
        A suivre..
        Tu peux également explorer toutes les issues en <Link to="/begin">recommencant le jeu </Link>
        </p>
      </div>
    );
  }
}

export default End;