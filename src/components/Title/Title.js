import React, { Component } from 'react';
import "./Title.css"

// const Title = props => <h1 className="title">{props.children}</h1>;


// BREAK


let score = 10

class Title extends Component {
  render() {
    return (
        
        <div>
        <h1 className="title">Lord of the Rings Memory Game</h1>
            <span>Your Current Score Is : {score}</span>
            {/* <span>Your Top Score Is : {topscore}</span> */}




        </div>
    );
  }
}


export default Title

