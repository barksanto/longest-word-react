import React from 'react';

// baseurl
// appid
// appkey
let word = 'dog'

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

const Letters = () => {
  return (
    <div>
      <div>I'm the Letters Component</div>
      <input type="text" spellCheck="true" />
    </div>
  );
}

export default Letters;
