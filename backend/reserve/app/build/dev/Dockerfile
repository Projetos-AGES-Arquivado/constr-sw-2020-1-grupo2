FROM node:latest

WORKDIR /home/node/app

ADD ./src ./

RUN yarn && yarn install

CMD ["yarn", "run" ,"start"]