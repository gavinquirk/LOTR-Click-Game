import React, { Component } from 'react';
import "./ScoreCounter.css"

class ScoreCounter extends Component {
  render() {
    return (
        
        <div className='ScoreCounter'>
            <h4>Your Current Score is: {this.props.currentScore}</h4>
            <h4>Your Top Score is: {this.props.topScore}</h4>
        </div>
    );
  }
}


export default ScoreCounter;