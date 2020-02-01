import React from 'react';
import { Link } from 'react-router-dom'

import baguette from '../img/baguette.jpeg'
import '../App.css';

class Help extends React.Component {
  render (){
    return (
      <div className="help">
        <figure className='figure-baguette'>
          <img className='img-baguette' src={baguette} alt='baguette magique'/>
        </figure>
        <p>
        Tu acceptes de l'aider, tout en restant prudent. Au vu des histoires qu'elle t'a raconté, il vaut mieux rester vigilent. Il est temps de s'évader avant que quelqu'un ne vous voit. Hermione te demande ta baguette pour ouvrir la cellule. Tu lui confie et elle s'empresse de jeter un "Bombarda !". Vous sortez de la cellule. Hermione jette un "Accio !", soudain, vous voyez deux balais arriver au loin et s'arrêter juste devant vous. Hermione te dis de monter sur le balai, tout en attrapant le sien. Avant de décoller, tu hésites. Doit-tu lui demander de te rendre ta baguette ?
        </p>
        <Link to="/donttakewand">Je lui laisse</Link>
        <Link to="/takewand">Je le récupère.. On ne sait jamais</Link>
      </div>
    );
  }
}

export default Help;