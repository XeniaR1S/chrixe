import React from 'react';
import { Link } from 'react-router-dom';

import portes from '../img/portes.png';
import '../App.css';

class Hug extends React.Component {
  render() {
    return (
      <div className="hug begin">
        <div className="card">
          <figure className="figureCard">
            <img className="img-portes imgCard" src={portes} alt="portes" />
          </figure>
          <p className="textCard">
            Intéressant, je ne te croyais pas comme ça. Enfin, cela t'as
            sûrement sauvé la vie. Perséphone te propose maintenant deux
            portes.. Qui te semblent d'ailleurs famillières. L'une est d'un
            blanc luisant et paraît très moderne, l'autre, quant à elle, est
            d'un bois visiblement très ancien et toutes ses parties en métal
            sont rouillées. Laquelle choisis-tu cette fois ?
          </p>
          <div className="choiceDoor">
            <Link className="linkTo" to="/olddoor">
              La porte blanche !
            </Link>
            <Link className="linkTo" to="/outhellold">
              La vieille porte!
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Hug;
