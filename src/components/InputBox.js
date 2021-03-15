import React from 'react';

require('dotenv').config();
console.log(process.env)

// baseurl
// appid
// appkey


const InputBox = () => {

  let word = '';

  const inputGuess = document.querySelector('.userInput');

  const captureGuess = (e) => {
    e.preventDefault();
    word = inputGuess.value;
    let userGuess = word
    fetch(`https://wordsapiv1.p.rapidapi.com/words/${word}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "c069a2cdecmshf6c6185371da6d1p100505jsn0552157e6778",
        "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
      }
    })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.error(err);
      });
    console.log(word);
    console.log(userGuess);
    // inputGuess.value = '';
  }

  return (
    <div className="mt-3">
      <form id="nameform">
        <label htmlFor="fname">Your guess: </label>
        <input type="text" id="fname" name="fname" className="userInput" spellCheck="true" />
      </form>
      <button type="submit" form="nameform" value="Submit" onClick={captureGuess}>Submit</button>
      
    </div>
  );
}

export default InputBox;
