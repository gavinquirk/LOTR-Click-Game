import React, { Component } from 'react';

let score = 10

class ScoreCounter extends Component {
  render() {
    return (
        
        <div className='ScoreCounter'>
            <span>Your Current Score is : {score}</span>



        </div>
    );
  }
}


export default ScoreCounter;