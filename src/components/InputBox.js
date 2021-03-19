import React from 'react';

require('dotenv').config();
// console.log(process.env)

const InputBox = (props) => {

  return (
    <div className="mt-3">
      <form id="nameform">
        <label htmlFor="fname">Your guess: </label>
        <input type="text" id="fname" name="fname" className="userInput" spellCheck="true" />
      </form>
      <button id="submit-button" type="submit" form="nameform" value="Submit" onClick={props.captureGuess}>Submit</button>
    </div>
  );
}

export default InputBox;
