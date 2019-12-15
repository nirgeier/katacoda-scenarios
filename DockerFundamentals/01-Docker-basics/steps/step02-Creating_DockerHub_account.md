- Goto [`docker.hub`](https://hub.docker.com/)
- Create your [`docker.hub`](https://hub.docker.com/) account if you don't have any

**Login with your docker hub credentials**
- Login with your docker hub username/password
  
  `docker login`{{execute}}

- Enter your username / password
- You should something like this as the output:

      $ docker login
      Login with your Docker ID to push and pull images from Docker Hub. 
      If you don't have a Docker ID, head over to https://hub.docker.com to create one.
      Username: <YOUR USER NAME>
      Password:
      
      ...

      Login Succeeded

- **Set up your user locally** - We will need it later on
  `export DOCKER_USER_NAME=$(docker info | sed '/Username:/!d;s/.* //');`{{execute}}

- Verify that the user is set correctly

    `echo $DOCKER_USER_NAME`{{execute}}

