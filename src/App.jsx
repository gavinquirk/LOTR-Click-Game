import React, { Component } from 'react';
import './App.css';
import Title from "./components/Title"
import Wrapper from "./components/Wrapper";
import characters from './characters.json'
import CharacterCard from './components/CharacterCard'
// import score from './components/'

class App extends Component {
  state = {
    characters,
    score: 10
  };

  handleCardClick = (character) => {
    console.log('character', character.isClicked)
    console.log(characters)
    console.log(this)


    // If clicked card has already been clicked
    if (character.isClicked === true) {
      console.log('is already clicked')
      // handle end game
    } else {
      // TODO: increment score by 1
      
      // Set character cliked to true
      // character.isClicked = true

      this.state.characters[character.id].isClicked = true
      console.log(this.state.characters[character.id]);
      // Shuffle the array
      for (let i = characters.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [characters[i], characters[j]] = [characters[j], characters[i]];
      }
      // Update state with new array
      this.setState({ characters });
    }
  }

  render() {
    return (
      <Wrapper>
        <Title score={this.state.score} />
        {this.state.characters.map(character => (
          <CharacterCard
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
            handleCardClick={this.handleCardClick}
            isClicked={character.isClicked}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
