import React from 'react';
import { Link } from 'react-router-dom'
import '../App.css';

class DoorToExit extends React.Component {
  render (){
    return (
      <div className="door-to-exit">
        <Link to="/begin"> Tu fuis pleûtre ?! RECOMMENCE !</Link>
      
      </div>
    );
  }
}

export default DoorToExit;