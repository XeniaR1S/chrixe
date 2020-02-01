import React from 'react';
import cerbere from '../img/cerbere.jpg'
import '../App.css';

class DontHug extends React.Component {
  render (){
    return (
      <div className="dont-hug">
        <figure className='figure-cerbere'>
          <img className='img-cerbere' src={cerbere} alt='Cerbere'/>
        </figure>
        <p>
        Tu as gardé ta dignité, mais pas ta vie. Perséphone, véxée, a appelé Cerbère, le chien a trois tête et gardien des enfers pour s'occuper de ton cas. Tu es mort, déchiqueté même. 
        </p>
      </div>
    );
  }
}

export default DontHug;