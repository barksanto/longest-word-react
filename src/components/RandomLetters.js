import React from 'react';

const RandomLetters = () => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  // console.log(alphabet[Math.floor(Math.random() * alphabet.length)])


  // get 8 random letters
  const randomLetters = [];

  let i;
  for (i = 0; i < 8; i++) {
    console.log(alphabet[Math.floor(Math.random() * alphabet.length)]);
    randomLetters.push(alphabet[Math.floor(Math.random() * alphabet.length)]);
  }
  console.log(randomLetters)

  return (
    <div className="container">
      Random Letters Component
      <div className="row justify-content-center">
        {
          randomLetters.map(letter => {
            return (<div className="col-1">{letter}</div>)
          })
        }
      </div>

    </div>
  );
}

export default RandomLetters;
