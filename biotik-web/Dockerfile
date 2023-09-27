# Dockerfile para el frontend
FROM node:20.2.0-bullseye-slim
# Crear y establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos necesarios y el package.json
COPY package.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto de los archivos del frontend
COPY . .

RUN npm run build

ENV VITE_API_URL=http://localhost:5035/datos

EXPOSE 3000

# Servir los archivos estáticos del build con el servidor web incorporado de Node.js
CMD ["npx", "serve", "-s", "dist"]