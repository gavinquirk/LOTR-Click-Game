import React, { Component } from 'react';
import './App.css';
import Title from "./components/Title"
import Wrapper from "./components/Wrapper";
import characters from './characters.json'
import CharacterCard from './components/CharacterCard'
// import score from './components/'

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    characters,
    // score
  };


  handleCardClick = id => {
    alert(this.props.id)
    // Use Fisher–Yates shuffle algorithm on array
    for (let i = characters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [characters[i], characters[j]] = [characters[j], characters[i]];
    }
    // Update state with new array
    this.setState({ characters });
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Lord of the Rings Memory Game</Title>
        {this.state.characters.map(character => (
          <CharacterCard
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
            handleCardClick={this.handleCardClick}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
