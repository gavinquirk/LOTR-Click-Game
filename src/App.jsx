import React, { Component } from 'react';
import './App.css';
import Title from "./components/Title"
import characters from './characters.json'
import CharacterCard from './components/CharacterCard'
import ScoreCounter from './components/ScoreCounter/ScoreCounter'

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    characters,
    currentScore: 0,
    topScore: 0,
    charactersChosen: []
  };

  // Check if current score is greater than top score, and change top score if it is
  updateScore = () => {
    let currentScore = this.state.currentScore
    let topScore = this.state.topScore
    let newScore = currentScore + 1
    this.setState({ currentScore: newScore })
    if (newScore >= topScore) {
      this.setState({ topScore: newScore })
    }

  }

  // Shuffle card order and update array
  shuffleCards = (characters) => {
    for (let i = characters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [characters[i], characters[j]] = [characters[j], characters[i]];
    }
    this.setState({ characters });
  }

  // Update charactersChosen array with new chosen id
  updateChosen = (chosenId) => {
    var newArray = this.state.charactersChosen.slice();
    newArray.push(chosenId);
    this.setState({ charactersChosen: newArray })
  }

  // Reset and alert user that they have lost the game
  gameOver = () => {
    this.setState({ currentScore: 0 })
    this.setState({ charactersChosen: [] })
    alert("You lose! Try to beat your top score!")
  }

  // Handle all card click logic
  handleCardClick = (chosenId) => {
    console.log(chosenId)
    // Check if character is already chosen, or update to continue game
    if (this.state.charactersChosen.indexOf(chosenId) > -1) {
      this.gameOver()
    } else {
      // Update chosen characters array with clicked card id
      this.updateChosen(chosenId)
      // Check and update new top score
      this.updateScore()
      // Shuffle the cards
      this.shuffleCards(this.state.characters)
    }

  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div className="main">
        <div className="header">
          <Title>Lord of the Rings Memory Game</Title>
          <h3>Test Your Memory</h3>
          <p>Click on as many avatars as possible without repeating. Be careful, they will shuffle every time!</p>
          <ScoreCounter currentScore={this.state.currentScore} topScore={this.state.topScore} />
        </div>
        <div className="card-section">
          {this.state.characters.map(character => (
            <CharacterCard
              id={character.id}
              key={character.id}
              name={character.name}
              image={character.image}
              handleCardClick={this.handleCardClick}
              scoreTest={this.scoreTest}
              isClicked={character.isClicked}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
