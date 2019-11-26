Create a new Dockerfile

  `touch Dockerfile`{{execute}}

- Add the following content to the Dockerfile
<pre>
  FROM docker/whalesay:latest
  RUN apt-get -y update && apt-get install -y fortunes
  CMD /usr/games/fortune -a | cowsay
<pre>

- Build and run the container
`docker build -t docker-whale . && docker run docker-whale`{{execute}}

- Execute the above several times

