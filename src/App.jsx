import React, { Component } from 'react';
import './App.css';
import CharacterDisplay from './Components/CharacterDisplay'
import Header from './Components/Header'

class App extends Component {
  constructor() {
    super()
    this.state = {
      characterArray : [
          {
            id : 1,
            name : 'aragorn',
            imagePath : '../images/avatar-aragorn.png',
            clicked : false
          },
          {
            id : 2,
            name : 'legolas',
            imagePath : '../public/assets/images/avatar-legolas.png',
            clicked : false
          },
          {
            id : 3,
            name : 'gimli',
            imagePath : '../public/assets/images/avatar-gimli.jpg',
            clicked : false
          },
          {
            id : 4,
            name : 'elrond',
            imagePath : '../public/assets/images/avatar-elrond.gif',
            clicked : false
          },
          {
            id : 5,
            name : 'gandalf',
            imagePath : '../public/assets/images/avatar-gandalf.jpg',
            clicked : false
          }
        ]
    }
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <CharacterDisplay characterArray={this.state.characterArray}/>
      </div>
    );
  }
}


export default App;
