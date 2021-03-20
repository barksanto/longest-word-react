import React from 'react';

require('dotenv').config();
// console.log(process.env)

const InputBox = (props) => {

  return (
    <div className="mt-3 container">
      <label htmlFor="fname" className="">Your guess: </label>
      <form id="nameform" className="row justify-content-center">
        <input type="text" id="fname" name="fname" className="userInput" spellCheck="true" />
      </form>
      <button className="submit-button row justify-content-center" type="submit" form="nameform" value="Submit" onClick={props.captureGuess}>Submit</button>
    </div>
  );
}

export default InputBox;
