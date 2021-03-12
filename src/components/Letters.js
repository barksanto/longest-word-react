import React, { setState, useState } from 'react';
require('dotenv').config();


// baseurl
// appid
// appkey
let word = 'dog'



const Letters = () => {
  return (
    <div>
      <div>I'm the Letters Component</div>
      <input type="text" spellCheck="true" />
    </div>
  );
}

export default Letters;
