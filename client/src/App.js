import React, { Component } from 'react';
import './App.css';
import Jumbotron from './components/Jumbotron/Jumbotron.js';
import  Navbar  from './components/Navbar/Navbar.js';
import MissionSection from './components/MissionSection/MissionSectin';

class App extends Component {
  constructor() {
    super();

    this.state = {
      data:[]
    };

  }


  componentDidMount() {
 
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Jumbotron /> 
        <MissionSection />     
      </div>
    );
  }
}

export default App;
