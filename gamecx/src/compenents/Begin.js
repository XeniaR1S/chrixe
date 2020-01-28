import React from 'react';
import '../App.css';
<<<<<<< HEAD
=======
import cabane from '../img/cabane.jpg'
>>>>>>> 3628bd63da1e64d6c973992a36b6035e009ad75d

class Begin extends React.Component {
  constructor(props){
    super(props)
    
  }
  render (){
<<<<<<< HEAD
  return (
    <div className="begin">
    </div>
  );
}
=======
    return (
      <div className="begin">
        <figure className='figure-cabane'>
          <img className='img-cabane' src={cabane} alt='cabane'/>
        </figure>
        
        Begin
      </div>
    );
  }
>>>>>>> 3628bd63da1e64d6c973992a36b6035e009ad75d
}

export default Begin;