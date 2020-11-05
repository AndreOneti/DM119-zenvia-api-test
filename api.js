// Importação das Bibliotecas usadas
const axios = require('axios').default;
const dotenv = require('dotenv');

// Carregando as variaveis de ambientes do arquivo .env
dotenv.config();

// Desestruturando as variaveis de ambiente
const { phoneId = '', token = '', reciever = '' } = process.env;

axios
  // Seleciona o metodo post para a url do zenvia como primeiro parametro
  // Como segundo parametros espera os dados a serem mandado no corpo da requisição
  // Como terceiro parametro os possiveis headers
  .post('https://api.zenvia.com/v2/channels/sms/messages', {
    from: phoneId,
    to: reciever,
    contents: [{ type: 'text', text: 'Hello World!\nI\'m a message from api request' }]
  }, {
    headers: { 'X-API-TOKEN': token }
  })
  // Recebe uma Promise como retorno
  .then((response) => {
    // Escreve no console o resultado do envio
    console.log('Response:', response.data);
  })
  .catch((error) => {
    // Escreve no console o erro ocorrido
    console.log('Error:', error);
  });
