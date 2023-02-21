FROM node:14-alpine
WORKDIR /Docker-Demo

RUN mkdir -p /node_modules && chown node:node -R /node_modules
RUN yarn global add pm2

USER node

COPY --chown=node:node package.json yarn.lock ./

RUN yarn install

COPY --chown=node:node . ./

EXPOSE 3000
