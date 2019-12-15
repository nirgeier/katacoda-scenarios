
In order to build and publish the container do the following:

- Execute following commands
  `docker build -t ${DOCKER_USER_NAME}/node-server .`{{execute}}

- Upload the image to your registry
  `docker push ${DOCKER_USER_NAME}/node-server`{{execute}} 
  
- Verify that the container is container was uploaded
  `docker pull ${DOCKER_USER_NAME}/node-server`{{execute}} 