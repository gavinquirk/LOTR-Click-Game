import React, { Component } from 'react';
import './App.css';
import CharacterDisplay from './Components/CharacterDisplay'
import Header from './Components/Header'

// function handleCharacterClick (event) {
//     console.log('test')
// }

class App extends Component {
  constructor() {
    super()
    this.state = {
      characterArray: [
        {
          id: 1,
          name: 'Aragorn',
          imagePath: '../images/avatar-aragorn.png',
          clicked: false
        },
        {
          id: 2,
          name: 'Legolas',
          imagePath: '../public/assets/images/avatar-legolas.png',
          clicked: false
        },
        {
          id: 3,
          name: 'Gimli',
          imagePath: '../public/assets/images/avatar-gimli.jpg',
          clicked: false
        },
        {
          id: 4,
          name: 'Elrond',
          imagePath: '../public/assets/images/avatar-elrond.gif',
          clicked: false
        },
        {
          id: 5,
          name: 'Gandalf',
          imagePath: '../public/assets/images/avatar-gandalf.jpg',
          clicked: false
        },
        {
          id: 6,
          name: 'Arwen',
          imagePath: '../public/assets/images/avatar-gandalf.jpg',
          clicked: false
        },
        {
          id: 7,
          name: 'Boromir',
          imagePath: '../public/assets/images/avatar-gandalf.jpg',
          clicked: false
        },
        {
          id: 8,
          name: 'Elrond',
          imagePath: '../public/assets/images/avatar-gandalf.jpg',
          clicked: false
        },
        {
          id: 9,
          name: 'Frodo',
          imagePath: '../public/assets/images/avatar-gandalf.jpg',
          clicked: false
        },
        {
          id: 10,
          name: 'Sam',
          imagePath: '../public/assets/images/avatar-gandalf.jpg',
          clicked: false
        },
        {
          id: 11,
          name: 'Merry',
          imagePath: '../public/assets/images/avatar-gandalf.jpg',
          clicked: false
        },
        {
          id: 12,
          name: 'Pippin',
          imagePath: '../public/assets/images/avatar-gandalf.jpg',
          clicked: false
        },
      ],
      score : 0
    }
  }

  
  render() {
    // console.log(this.state.characterArray)
    // console.log(this.state.score)
    return (
      <div className='App'>
        <Header />
        <div className='CharacterContainer'>
          {/* <CharacterDisplay score={this.state.score} /> */}
          <CharacterDisplay score={this.state.score} characterArray={this.state.characterArray} />

        </div>
      </div>
    );
  }
}


export default App;
