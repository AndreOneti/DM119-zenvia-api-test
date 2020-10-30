require('dotenv').config();

const { Client, TextContent } = require('@zenvia/sdk');

const { phoneId = '', token = '', reciever = '' } = process.env;

const client = new Client(token);

const sms = client.getChannel('sms');

const content = new TextContent('Hello World!');

sms
  .sendMessage(phoneId, reciever, content)
  .then((response) => {
    console.log('Response:', response);
  })
  .catch((error) => {
    console.log('Error:', error);
  });
