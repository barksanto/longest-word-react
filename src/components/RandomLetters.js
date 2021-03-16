import React from 'react';
import '../styles/random-letter.css'

const RandomLetters = ({ letterData }) => {

  return (
    <div className="container">
      Random Letters Component
      <div className="row justify-content-between">
        {
          letterData.map(letter => {
            return (<div className="col-1 letter" key={Math.random()}>{letter}</div>)
          })
        }
      </div>

    </div>
  );
}

export default RandomLetters;
