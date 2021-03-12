import React, { setState, useState } from 'react';
require('dotenv').config();
console.log(process.env)

// baseurl
// appid
// appkey


const Letters = () => {

  let word = 'dog';

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

  let inputGuess = document.getElementById('fname').value

  const captureGuess = (e) => {
    e.preventDefault();
    console.log(inputGuess);
  }

  return (
    <div>
      <div>I'm the Letters Component</div>

      <form id="nameform">
        <label for="fname">Your guess</label>
        <input type="text" id="fname" name="fname" spellCheck="true" />
      </form>
      <button type="submit" form="nameform" value="Submit" onClick={captureGuess}>Submit</button>

    </div>
  );
}

export default Letters;
