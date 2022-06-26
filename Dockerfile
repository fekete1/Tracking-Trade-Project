FROM node:16-alpine

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY next.config.js ./next.config.js

COPY src/pages ./pages
COPY public ./public
COPY src/styles ./styles
COPY src/assets ./assets
COPY /src/components ./components

CMD ["yarn", "dev"]
