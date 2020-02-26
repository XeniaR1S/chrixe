import React from 'react';
import { Link } from 'react-router-dom'
import '../App.css';

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
        <div className="question-home">
          Es-tu prêt à relever le défi ? 
        </div>
        <div className="question-home">
          Seras-tu à la hauteur ? 
        </div>
        <div className="question-home">
          Alors n'attends plus et suis ton destin.
        </div>

        <form className="playerNameForm" onSubmit={this.onSubmit}>  
          <label className="question-home" htmlFor="namePlayer">
            Mais avant de partir, dis moi, quel est ton nom ?
          </label>
          
          <input className="name-player" name="namePlayer" type="text" value={this.state.namePlayer} onChange={this.handleChange} />
      
          <Link className="linkToBegin" to={{pathname:"/begin", state: {namePlayer:this.props.namePlayer}}}>
            <input className="buttonHome" type="button" value="Commencer"/> 
          </Link>

        </form>

      </div>
    );
  }
}

export default Home;
