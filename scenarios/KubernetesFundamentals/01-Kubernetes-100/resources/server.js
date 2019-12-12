// Set the server port which wie will be listenig to
const SERVER_PORT = 3000;

// Create the basic http server
require('http')
    .createServer((request, response) => {

        // Send reply to user
        response.end(`Hello from server. `);

    }).listen(SERVER_PORT, () => {
        // Notify users that the server is up and running
        console.log(`Server is up. 
            Please click or point your browser to:
            http://localhost:${SERVER_PORT}`);
    });