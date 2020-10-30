require('dotenv-safe').config();

const axios = require('axios').default;

const { phoneId = '', token = '', reciever = '' } = process.env;

axios
  .post('https://api.zenvia.com/v2/channels/sms/messages', {
    from: phoneId,
    to: reciever,
    contents: [{ type: 'text', text: 'Hello World!' }]
  }, {
    headers: { 'X-API-TOKEN': token }
  })
  .then((response) => {
    console.log('Response:', response.data);
  })
  .catch((error) => {
    console.log('Error:', error);
  });
