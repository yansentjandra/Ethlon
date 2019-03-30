import React, { Component } from 'react';
import './App.css';
import Jumbotron from './components/Jumbotron/Jumbotron.js';
import  Navbar  from './components/Navbar/Navbar.js';
import MissionSection from './components/MissionSection/MissionSectin';
import Card from './components/Card/Card';

class App extends Component {
  constructor() {
    super();

    this.state = {
      volunteers:[],
      bool: true
    };
    this.onClick = this.onClick.bind(this);
  }

componentDidMount(){
  return fetch('http://localhost:8000/result')
  .then(res => res.json())
  .then(data => {
    this.setState({
      volunteers: data
    })
  })
  .catch(error => {
    console.log(error);
  });
}

onClick() {
  const { bool } = this.state;
  this.setState({
    bool: false
  });

}



  render() {

    const { bool, volunteers } = this.state;

    return (
      <div className="App">
        <Navbar />
        { bool === false ? <Card volunteers = {volunteers} /> :<Jumbotron 
        onClick= {this.onClick} 
        /> }  
      </div>
    );
  }
}

export default App;
