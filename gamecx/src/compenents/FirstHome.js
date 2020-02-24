import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../img/logo.png'
import '../App.css';

class FirstHome extends React.Component {
  render (){
    return (
      <div className="first-home">
        <figure className='figure-logo'>
          <img className='img-logo' src={Logo} alt='Logo'/>
        </figure>
        <p className='title-first-home'>Bienvenue, voyageur</p>
        <div className='text-first-home'>
          Tu t'apprêtes à vivre une aventure qui te fera voyager à travers
          plusieurs univers de la culture populaire. Il te faudra faire des
          choix qui pourront avoir des incidences sur la suite de ton périple.{' '}
        </div>
        <Link className="linkToBegin" to="/home">
            <input className="buttonEnter" type="button" value="Entrer dans le jeu"/> 
        </Link>
      </div>
    );
  }
}

export default FirstHome;