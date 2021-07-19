const fs = require('fs');
const axios = require('axios');
const FormData = require('form-data');

const data = new FormData();
data.append('purpose', 'answers');
data.append('file', fs.createReadStream('answers.jsonl'));

const params = {
  method: 'post',
  url: 'https://api.openai.com/v1/files',
  headers: {
    'Authorization': 'Bearer ' + process.env.OPENAI_API_KEY,
    ...data.getHeaders()
  },
  data: data
}

axios(params)
  .then(function(response) {
    console.log(response.data);
  })
  .catch(function(error) {
    console.log(error.message);
  });


