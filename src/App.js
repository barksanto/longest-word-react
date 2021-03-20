import React from 'react'
import './App.css';
import InputBox from './components/InputBox';
import RandomLetters from './components/RandomLetters';

let correctSound = new Audio('https://res.cloudinary.com/duj93wpnu/video/upload/v1606842266/Correct_Answer_aalpwh.mp3');

const calculateScore = (howManyTrue, wordIsGood) => {
  return (wordIsGood) ? `Nice word! Your score is ${howManyTrue * 2} points!` : '';
}

// const trueCounter = (trueCountVar, goodBoolVar) => {

// }

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
    // select input field element
    const inputGuess = document.querySelector('.userInput');
    word = inputGuess.value;

    const userSplitGuess = word.split('');

    // check if number of times true appears === length of userInput
    let trueCount = 0;
    let goodWord = false;
    // let points = 0;

    // if myguess includes letter in available add 1

    userSplitGuess.forEach(letter => (randomLetters.includes(letter)) ? trueCount++ : '');
    // if truecount is same as userguess.length change goodWord to true
    (trueCount === userSplitGuess.length) ? goodWord = true : console.log('used invalid letter');
    // trueCounter(trueCount, goodWord);
    // console.log(calculateScore(trueCount, goodWord));

    fetch(`https://wordsapiv1.p.rapidapi.com/words/${word}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "c069a2cdecmshf6c6185371da6d1p100505jsn0552157e6778",
        "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
      }
    })
      .then((response) => {
        if (response.status === 200) {
          correctSound.play();
          alert(calculateScore(trueCount, goodWord))
        } else {
          alert("Uh Oh! This word doesn't exist, or you used a letter that isn't an option")
        }
        window.location.reload()
      })
      .catch(err => {
        console.error(err);
      }).then(() => {
        inputGuess.value = '';
      })
  }

  return (
    <div className="App">
      <h1>Welcome to the longest word game!</h1>
      {/* random letters passed to child as prop */}
      <RandomLetters letterData={randomLetters} />
      {/* event handler passed to child as prop */}
      <InputBox captureGuess={captureGuess} />
    </div>
  );
}

export default App;
