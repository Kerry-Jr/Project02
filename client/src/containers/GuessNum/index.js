import React, { Component } from 'react';

class GuessNum extends Component {
  guessNum = () => {
    let userGuess = prompt('Guess the magic number!')
    let magicNum = Math.floor(Math.random() * 100) + 1;
    if (magicNum === userGuess) {
      alert('you got it right')
    } else {
      alert('Keep guessing')
    }
  }

  render() {
    return (
      <div>
        <h1> Guess the number please! Good luck</h1>
        <button>Click me to Play!</button>
      </div>
    )
  }
}

export default GuessNum;