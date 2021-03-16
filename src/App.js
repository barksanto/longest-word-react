import React, { Component } from 'react'
import './App.css';
import InputBox from './components/InputBox';
import RandomLetters from './components/RandomLetters';


function App() {

  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  // get 8 random letters - pass them down through props to funcitonal componentsm
  const randomLetters = [];
  let i;
  for (i = 0; i < 8; i++) {
    console.log(alphabet[Math.floor(Math.random() * alphabet.length)]);
    randomLetters.push(alphabet[Math.floor(Math.random() * alphabet.length)]);
  }


  const handleCallback = (childData) => {
    
  }

  return (
    <div className="App">
      <div>I'm the App component</div>
      <h1>Welcome to the longest word game!</h1>
      <RandomLetters letterData={randomLetters} />
      <InputBox />
    </div>
  );
}

export default App;
