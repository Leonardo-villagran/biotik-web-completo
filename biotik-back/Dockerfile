FROM node:22.1-slim

WORKDIR /usr/src/app

# Instala Nodemon globalmente
RUN npm install -g nodemon

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5000

CMD [ "npm", "run", "dev" ]