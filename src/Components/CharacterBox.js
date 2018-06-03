import React, { Component } from 'react';
// import logo from '../images/avatar-aragorn.png'

class CharacterBox extends Component {

  handleCharacterClick = event => {
    let clicked = this.props.character
    console.log(clicked)
    if (clicked.clicked === false) {
      clicked.clicked = true
      // this.props.score ++

    } else if (clicked.clicked === true) {
      alert('already clicked')
      // TODO: Handle already clicked, reset
    }
  }
  render() {
      // console.log(this.props.character)
      // console.log('score: ' + this.props.score)
      // console.log('character' + this.props.character.name)
    return (
        
        <div className='CharacterBox' onClick={this.handleCharacterClick} data-id={this.props.character.id}>
            <h2 onClick={this.handleCharacterClick}>{this.props.character.name}</h2>
        </div>
    );
  }
}


export default CharacterBox;
