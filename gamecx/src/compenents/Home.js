import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      namePlayer: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({ namePlayer: event.target.value });
  }

  render() {
    return (
      <div className="home">
        <h1>BIENVENUE VOYAGEUR</h1>
        <p>
          Tu t'apprêtes à vivre une aventure qui te fera voyager à travers
          plusieurs univers de la culture populaire. Il te faudra faire des
          choix qui pourront avoir des incidences sur la suite de ton périple.{' '}
        </p>
        <div className="questionHome">
          {' '}
          Es-tu prêt à relever le défi ? <br /> Seras-tu à la hauteur ? <br />{' '}
          Alors n'attends plus et suis ton destin.{' '}
        </div>
        <div className="firstnameHome"></div>
        <form className="playerNameForm" onSubmit={this.onSubmit}>
          <label htmlFor="namePlayer">
            Mais avant de partir, dis moi, quel est ton nom ?
          </label>
          <input
            className="namePlayer"
            name="namePlayer"
            type="text"
            value={this.state.namePlayer}
            onChange={this.handleChange}
          />
         <Link className="linkToBegin" to={{pathname:"/begin",
            state: {namePlayer:this.props.namePlayer}}}>
          <input 
            className="buttonHome"
            type="button"
            value="Commencer"
            
            /> 
            </Link>
        </form>
      </div>
    );
  }
}

export default Home;
