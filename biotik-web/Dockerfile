# Dockerfile para el frontend
# FROM node:20.2.0-bullseye-slim
FROM node:20.9
# Crear y establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos necesarios y el package.json
COPY package.json ./

# Copiar el archivo .env
COPY .env ./
RUN cat .env

# Instalar las dependencias
RUN npm install

# Copiar el resto de los archivos del frontend
COPY . .

# Define environment variable
ARG VITE_API_URL
ENV VITE_API_URL=${VITE_API_URL}

#ENV VITE_API_URL=http://localhost:5035/datos
# ENV VITE_API_URL=$VITE_API_URL

# Cargar las variables de entorno desde el archivo .env
# RUN set -o allexport; source .env; set +o allexport

RUN npm run build

EXPOSE 3000

# Servir los archivos estáticos del build con el servidor web incorporado de Node.js
CMD ["npx", "serve", "-s", "dist"]