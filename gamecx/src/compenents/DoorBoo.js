import React from 'react';
import { Link } from 'react-router-dom'

import tranchee from '../img/tranchee.jpg'
import '../App.css';

class DoorBoo extends React.Component {
  render (){
    return (
      <div className="door-boo">
        <figure className='figure-tranchee'>
          <img className='img-tranchee' src={tranchee} alt='Honey Dukes Sous-sol'/>
        </figure>
        <p>
        Une porte à l'allure attrayante, blanche avec des fleurs violettes ( Monstre & cie ) se trouve dans l'allée, c'est la seule porte éclairée, elle a un côté rassurant, tu décides d'entrer. L'enfer sur Terre, tu te retrouves dans une tranchée en pleine Guerre 14-18. A l'autre bout de la tranchée, tu repères une autre porte, tu sais au fond de toi qu'elle te sortira d'ici, mais tu ne sais pas que ce qui t'attends encore. Plusieurs possibilités s'offrent à toi : 
        - Si tu as la baguette, tu peux te téléporter à l'autre bout directement devant la porte et l'emprunter.
        - Si tu ne l'as pas, tu te retrouves à devoir traverser la tranchée sous le feux de l'ennemi, les mortiers grondent, malheureusement un tir te touche t'explose littéralement.
        - Si tu possèdes la pierre elle te réssucite petit veinard, et tu peux atteindre la porte.
        - Tu meurs, oublié de tous, au milieu des Poilus.
        </p>
        <Link to="/doorjapanese">Vite ! C'est pas ma guerre putain</Link>
      </div>
    );
  }
}

export default DoorBoo;