Docker use different directories under the hoods.

### docker images
Execute `docker images`{{execute}} to view list of the current images in this environment

### docker system
The `docker system df`{{execute}} displays total images and space used by the docker daemon.

- Execute the command and view the summary
- Execute `docker run hello-world`{{execute}} and once the container exit run the previous command again 
- Verify the changes with `docker system df`{{execute}}  && `docker images`{{execute}}



