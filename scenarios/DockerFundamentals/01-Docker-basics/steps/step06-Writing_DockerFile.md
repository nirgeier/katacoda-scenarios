
Now once our server is tested and we can use it, we want to distribute it as Docker container.

In order to do so we will use docker file.

- Create `Dockerfile` inside the previous server folder

    `touch Dockerfile`{{execute}}

**In the docker file we will add the following content**

- The base image which we will need for the container

    `FROM node`{{copy}}

- Add the server file to the container

    `ADD ./server.js`{{copy}}
    </pre>

- The full content at this stage
    <pre class="file" data-filename="Dockerfile" data-target="replace">
    # The base image for our container
    FROM node

    # Add the server file into the current folder in the server
    COPY ./server.js .

    # Start the server 
    CMD node server.js
    </pre>
    
-   `[FROM]` - Search for the node container and if it will not find it will download it.
-	`[EXPOSE]` - open the desired port for outside communication.
-	`[COPY]` - It will copy the “application” in our case its the script into the container
-	`[CMD]` - Last command is the CMD telling the container what to execute when the container is started, this is the code of our application
