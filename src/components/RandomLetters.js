import React from 'react';

const RandomLetters = () => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  // console.log(alphabet[Math.floor(Math.random() * alphabet.length)])
  console.log(alphabet[Math.floor(Math.random() * alphabet.length)]);

  return (
    <div>
      random letters component
    </div>
  );
}

export default RandomLetters;
