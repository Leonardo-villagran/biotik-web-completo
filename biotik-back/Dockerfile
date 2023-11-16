FROM node:20.9

WORKDIR /usr/src/app

# Instala Nodemon globalmente
RUN npm install -g nodemon

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5000

CMD [ "npm", "run", "dev" ]