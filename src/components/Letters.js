import React from 'react';

// baseurl
// appid
// appkey

const app_id = 'a15916a7';
const app_key = 'fb6b989ea04203c3c31d917404241125'
let endpoint = "entries"
let language_code = "en-us"
let word_id = "example"
let url = `https://od-api.oxforddictionaries.com/api/v2/${endpoint}/${language_code}/${word_id.toLowerCase()}`

const Letters = () => {
  return (
    <div>
      <div>I'm the Letters Component</div>
    </div>
  );
}

export default Letters;
