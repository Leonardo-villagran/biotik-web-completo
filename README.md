# Proyecto Biotik

Este repositorio contiene los archivos necesarios para ejecutar la aplicación Biotik, que incluye un servidor Express para el backend, una aplicación React Vite para el frontend, y utiliza PostgreSQL como base de datos.

## Configuración del entorno

Antes de ejecutar la aplicación, es necesario configurar algunas variables de entorno. Se proporciona un archivo `.env` en la carpeta base para la configuración general, y cada componente (backend y frontend) para las configuraciones específicas.

### Archivo `.env` en la carpeta base

```dotenv
## Back Docker
BACK_PORT=5000
DB_PORT=5432
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=nuevopassword
DB_NAME=biotik
JWT_SECRET=secreto

## Front Docker
VITE_API_URL=http://127.0.0.1:5035/datos

#RESTART_POLICY=always
RESTART_POLICY=no
```

Asegúrese de cambiar los valores proporcionados a valores seguros y específicos de su configuración.

## Docker Compose

El archivo `docker-compose.yml` define los servicios necesarios para ejecutar la aplicación. Incluye un servicio para PostgreSQL, el backend Express, PgAdmin y el frontend React Vite.

### Ejecución

Para ejecutar la aplicación, use el siguiente comando:

```bash
docker-compose up --build -d
```

Esto levantará todos los servicios y la aplicación estará disponible en:

- Backend: [http://127.0.0.1:5035](http://127.0.0.1:5035)
- Frontend: [http://127.0.0.1:3035](http://127.0.0.1:3035)

Asegúrese de que los puertos especificados no estén en uso y ajuste según sea necesario. 

## Tecnologías Utilizadas

La aplicación utiliza las siguientes tecnologías y herramientas:

- [React](https://reactjs.org/): Una biblioteca de JavaScript para construir interfaces de usuario.
- [Bootstrap](https://getbootstrap.com/): Un marco de diseño CSS para la creación de páginas web receptivas y modernas.
- [Vite](https://vitejs.dev/): Un marco de desarrollo web rápido que permite una experiencia de desarrollo extremadamente rápida.
- [Node.js](https://nodejs.org/): Un entorno de ejecución para JavaScript del lado del servidor.
- [Express](https://expressjs.com/): Un marco de aplicación web para Node.js.
- [PostgreSQL](https://www.postgresql.org/): Un sistema de gestión de bases de datos relacional de código abierto.