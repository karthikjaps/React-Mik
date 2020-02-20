FROM node:10-alpine

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

# Create app directory
WORKDIR /usr/src/app

RUN apk update

RUN apk add \
  automake \
  autoconf \
  libtool \
  gcc \
  make \ 
  g++ \
  zlib-dev \
  nasm \
  libpng-dev

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . /usr/src/app

RUN npm run deploy

EXPOSE 3000
EXPOSE 6001

CMD [ "npm", "start" ]
