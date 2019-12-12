-----
### Build the base server

- **You don't need to know NodeJs in order to be able to build the server**

- Create a folder for your server

    `mkdir server`{{execute}}

- Create the server main file named in the new folder

    `cd server && touch server.js`{{execute}}

- Open the server folder, and then the `server.js`
- Click to `Copy to Editor` in order to copy the file content

<pre class="file" data-filename="server/server.js" data-target="replace">
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
</pre>