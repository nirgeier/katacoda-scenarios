# Our server is based upon nodejs
FROM node

# Expose the desired server port
EXPOSE 3000

# Copy the local server code to our container
# Important !!! dont forget the [.] which means the local folder
COPY server1.js .
COPY package.json .

# Install the npms
RUN npm i 

# Start the server once the ocntainer is running
CMD node ./server1.js