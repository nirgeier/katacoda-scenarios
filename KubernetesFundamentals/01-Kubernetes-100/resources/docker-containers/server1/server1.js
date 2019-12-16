const
    // Set the server port which wiill be listenig to
    SERVER_PORT = 3000,
    os = require('os'),
    fs = require('fs-extra'),
    FILE_NAME = `/shared_volume/shared.log`;

// Create the basic http server
require('http')
    .createServer((request, response) => {

        // Write to the shared folder
        fs.ensureFile(FILE_NAME);
        fs.appendFile(FILE_NAME, `Hello from server1.${os.EOL}`);

        // Send reply to user
        response.end(`<h1>Hello from server1.</h1>`);

    }).listen(SERVER_PORT, () => {
        // Notify users that the server is up and running
        console.log(`Server is up. 
            Please click or point your browser to:
            http://localhost:${SERVER_PORT}`);
    });