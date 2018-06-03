import React, { Component } from 'react';
import CharacterBox from './CharacterBox'
// import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap'


class CharacterDisplay extends Component {
  render() {
    let characters
    if (this.props.characterArray) {
        characters = this.props.characterArray.map(character => {
            return(
                <CharacterBox key={character.id} character={character} />
            )
        })
    }
    return (
        <div className='characterDisplay'>
            {characters}
        </div>
    );
  }
}


export default CharacterDisplay;
