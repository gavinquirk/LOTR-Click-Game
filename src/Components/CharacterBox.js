import React, { Component } from 'react';
// import logo from '../images/avatar-aragorn.png'

class CharacterBox extends Component {
  render() {
    // console.log(this.props.character.imagePath)
    let charImage = this.props.character.imagePath
    console.log(charImage)

    return (
        // <li className='CharacterBox'>
        //     {this.props.character.name} - {this.props.character.id}
        // </li>
        
        <div className='CharacterBox'>
            <h2>{this.props.character.name}</h2>
        </div>
    );
  }
}


export default CharacterBox;
