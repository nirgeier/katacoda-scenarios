The second container, which we will run, will be similar to the first one but this time we will pass it parameters in run time.

We will use a pre build `docker/whalesay` container, which can echo our input, printing out the message to the screen

- Run the `docker/whalesay` container and pass it a message
- As mentioned above the container will read our message and will print out a whale (docker logo) with our message with the 

`docker run docker/whalesay cowsay PaloAlto is coooooool`{{execute}}