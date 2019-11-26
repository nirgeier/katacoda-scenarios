// Set the server port which we will be listening to
const SERVER_PORT = 3000;

require('http').createServer((request, response) => {
  response.send('Hello World!');
}).listen(SERVER_PORT, () => {
  console.log(`Server is up. You can open you browser: http://localhost:${SERVER_PORT}`);
});