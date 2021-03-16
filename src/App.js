import React, { Component } from 'react'
import './App.css';
import InputBox from './components/InputBox';
import RandomLetters from './components/RandomLetters';

function App() {

  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  // get 8 random letters - pass them down through props to funcitonal components
  // initialize array
  const randomLetters = [];
  // 
  for (let i = 0; i < 8; i++) {
    console.log(alphabet[Math.floor(Math.random() * alphabet.length)]);
    randomLetters.push(alphabet[Math.floor(Math.random() * alphabet.length)]);
  }

  // code to capture user input in submit box
  let word = '';
  // target input field
  const inputGuess = document.querySelector('.userInput');

  // event that's triggered after submit
  const captureGuess = (e) => {
    e.preventDefault();
    word = inputGuess.value;

    fetch(`https://wordsapiv1.p.rapidapi.com/words/${word}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "c069a2cdecmshf6c6185371da6d1p100505jsn0552157e6778",
        "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
      }
    })
      .then(response => {
        // console log and alert success
        console.log(response.status);
        if (response.status === 200) {
          console.log("This word exists!")
        }
      })
      .catch(err => {
        console.error(err);
      }).then(() => {
        // inputGuess.value = '';
      })

      const userSplitGuess = word.split('');
      console.log(userSplitGuess)
  }

 
  // if(){

  // }

  return (
    <div className="App">
      <div>I'm the App component</div>
      <h1>Welcome to the longest word game!</h1>
      {/* random letters passed to child as prop */}
      <RandomLetters letterData={randomLetters} />
      {/* event handler passed to child as prop */}
      <InputBox captureGuess={captureGuess} />
    </div>
  );
}

export default App;
