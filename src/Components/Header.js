import React, { Component } from 'react';
import ScoreCounter from './ScoreCounter'

class Header extends Component {
  render() {
    return (
        
        <div className='Header'>
            <h2>LOTR Click Game!</h2>
            <ScoreCounter />
        </div>
    );
  }
}


export default Header;