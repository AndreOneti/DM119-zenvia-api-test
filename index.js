// Importação das Bibliotecas usadas
const { Client, TextContent } = require('@zenvia/sdk');
const dotenv = require('dotenv-safe');

// Carregando as variaveis de ambientes do arquivo .env
dotenv.config();

// Desestruturando as variaveis de ambiente
const { phoneId = '', token = '', reciever = '' } = process.env;

// Criando um cliente de envios
const client = new Client(token);

// Selecionando o timo de envio - SMS
const sms = client.getChannel('sms');

// Cria o texto a ser enviado
const content = new TextContent('Hello World!\nI\'m a message from zenvia sdk');

// Utiliza o metodo sendMessage do canal selecionado
sms
  // O metodo espera 3 parametros,
  // id do telefone cadastrado, telefone a receber o sms e o texto a enviar
  .sendMessage(phoneId, reciever, content)
  // Recebe uma Promise como retorno
  .then((response) => {
    // Escreve no console o resultado do envio
    console.log('Response:', response);
  })
  .catch((error) => {
    // Escreve no console o erro ocorrido
    console.log('Error:', error);
  });
