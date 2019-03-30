import React, { Component } from 'react';
import HeroText from '../HeroText/HeroText';
import { Jumbotron } from 'react-bootstrap';
import './Jumbotron.css';
class JumbotronComponent extends Component {
  render() {
    const { onClick } = this.props;
    return (
  
<Jumbotron fluid>
      <div className="hero-text">
      <button 
      onClick = { onClick }
      className="button">
      Find Volunteer
      </button>
      </div>
</Jumbotron>
   );
  }
}

export default JumbotronComponent;
