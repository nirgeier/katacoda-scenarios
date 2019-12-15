- Add a missing line to the `Dockerfile` to "open" the required port
   You need to add this line or the server will not be able to listen for requests
    
    `EXPOSE 3000`

- The container should be rebuild with the updated code

   `docker build -t node_server .`{{execute}}

- Executed in detached mode so it will continue to run in the background
- You need to start the server & expose the required **ports** so you can test your server

    `docker run -d -p3000:3000 --name node_server node_server`

Command          | Explanation
-----------------|----------------------
**docker run**   | execute the container
**-d**           | execute in detached mode
**-p3000:3000**  | expose (open) the required ports
**--name ...**   | name your container for easiest access
**node_server**  | the last parameter is the required image

- Test the server by clicking on the `Node Server` tab.
