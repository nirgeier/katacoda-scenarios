-----
### Build the Docker container

- Lets build the container and attach tag to it
    `docker build . -t node1`{{execute}}

- Lets test the docker container
    `docker run -d -p3000:3000 --name node1 node1`{{execute}}

- Click on the **Node Server (port 3000)**
    You should see the server greeting.

- Stop the container
    `docker stop node1`{{execute}}
