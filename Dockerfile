FROM node:alpine

COPY $PWD /home/node/app

WORKDIR /home/node/app

RUN yarn install --prod;

EXPOSE 4666


CMD ["/bin/sh", "-c", "yarn start"]