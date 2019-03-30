import React, { Component } from 'react';
import HeroText from '../HeroText/HeroText';
import { Jumbotron } from 'react-bootstrap';
import './Jumbotron.css';
class JumbotronComponent extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
      alert("test")
  }
  render() {
    return (
  
<Jumbotron fluid>
      <div className="hero-text">
      <button 
      onClick = {this.handleClick}
      className="button">
      Find Volunteer
      </button>
      </div>
</Jumbotron>
   );
  }
}

export default JumbotronComponent;
