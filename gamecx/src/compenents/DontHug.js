import React from 'react';
import cerbere from '../img/cerbere.jpg';
import '../App.css';
import { Link } from 'react-router-dom';

class DontHug extends React.Component {
  render() {
    return (
      <div className="dont-hug begin">
        <div className="card">
          <figure className="figureCard">
            <img className="img-cerbere imgCard" src={cerbere} alt="Cerbere" />
          </figure>
          <p className="textCard">
            Tu as gardé ta dignité, mais pas ta vie. Perséphone, véxée, a appelé
            Cerbère, le chien a trois tête et gardien des enfers pour s'occuper
            de ton cas. Tu es mort, déchiqueté même.
          </p>
        </div>

        <Link className="linkTo" to="/begin">
          RECOMMENCE
        </Link>
      </div>
    );
  }
}

export default DontHug;
