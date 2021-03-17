import React from 'react'
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
    // console.log(alphabet[Math.floor(Math.random() * alphabet.length)]);
    randomLetters.push(alphabet[Math.floor(Math.random() * alphabet.length)]);
  }

  // event that's triggered after submit
  // check to see if each letter of userInput is included in the random letters array
  const captureGuess = (e) => {
    // prevent default form reload
    e.preventDefault();
    // code to capture user input in submit box
    let word = '';
    // select input field
    const inputGuess = document.querySelector('.userInput');
    word = inputGuess.value;

    const userSplitGuess = word.split('');
    // userSplitGuess.every(letter => {
    //   if (randomLetters.includes(letter)) {
    //     console.log('letters included!');
    //     return letter
    //   }
    // })


    // check if number of times true appears === length of userInput
    let trueCount = 0;
    userSplitGuess.forEach(letter => {
      // console.log(randomLetters.includes(letter))
      if (randomLetters.includes(letter)) {
        trueCount++
      }
    })
    console.log(trueCount);




    fetch(`https://wordsapiv1.p.rapidapi.com/words/${word}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "c069a2cdecmshf6c6185371da6d1p100505jsn0552157e6778",
        "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
      }
    })
      .then(response => {
        // console log and alert success
        // console.log(response.status);
        if (response.status === 200) {
          console.log("This word exists!")
        }
      })
      .catch(err => {
        console.error(err);
      }).then(() => {
        inputGuess.value = '';
      })
  }

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
