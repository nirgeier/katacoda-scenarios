// Set the server port which we will be listening to
const SERVER_PORT = 3000;

// Create the server
require('http').createServer((request, response) => {

  // Send this response for every request
  response.end(`Server reply: Hello World!\n\n`);
})
  // Listen on the given port
  .listen(SERVER_PORT, () => {
    // Print message to the console so users will know that the
    // server is running and listening on the given port
    console.log(`Server is up. You can open you browser: 
    http://localhost:${SERVER_PORT}`);
  });