FROM node:9.11.2-alpine
RUN npm install -g md2gslides
COPY entrypoint.sh /usr/sbin
ENTRYPOINT ["/usr/sbin/entrypoint.sh"]

