import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: ""
  //   }
  //   this.setBudget = this.setBudget.bind(this)
  //   this.handleFormSubmit = this.handleFormSubmit.bind(this)
  //   this.handleBudgetChange = this.handleBudgetChange.bind(this)
  // }
  //
  // handleBudgetChange(event) {
  //   this.setState({ name: event.target.value })
  // }
  //
  // setBudget(newBudget) {
  //   fetch('http://localhost:8000/api/input', {
  //     credentials: 'same-origin',
  //     method: 'POST',
  //     body: JSON.stringify(newBudget),
  //     headers: {'Content-Type': 'application/json'}
  //   })
  //   .then(response => {
  //     if (response.ok) {
  //       return response;
  //     } else {
  //       let errorMessage = `${response.status} (${response.statusText})`,
  //       error = new Error(errorMessage);
  //       throw(error);
  //     }
  //   })
  //   .then(response => response.json())
  //   .then(body => {
  //
  //   })
  //   .catch(error => console.error(`Error in fetch: ${error.message}`));
  // }
  //
  // handleFormSubmit(event){
  //   event.preventDefault();
  //   let formPayLoad = {
  //     language: this.state.name
  //   };
  //   this.setBudget(formPayLoad);
  // }

//   <form className='budget-form' onSubmit={this.handleFormSubmit}>
//   <div className='row'>
//     <label className='nine columns'>Language
//       <input
//         name='name'
//         type='text'
//         value={this.state.name}
//         onChange={this.handleBudgetChange}
//       />
//     </label>
//     <input className='budget-button three columns' type='submit' value='Save!' />
//   </div>
// </form>

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
