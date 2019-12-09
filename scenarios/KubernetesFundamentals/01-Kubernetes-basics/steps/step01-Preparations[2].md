-----
### Docker file

- Create a Dockerfile for your server

    `tousch server/Dockerfile`{{execute}}

- As before copy the content below to the `server/Dockerfile`

<pre class="file" data-filename="server/Dockerfile" data-target="replace">
    # Use lates nodeJs container
    FROM node

    # Expose the server port (in our sample 3000)
    EXPOSE 3000

    # Copy the server code to the container
    COPY server.js .

    # start the server we launch the container
    CMD node server.js
</pre>