# Proyecto Biotik

Este repositorio contiene los archivos necesarios para ejecutar la aplicación Biotik, que incluye un servidor Express para el backend, una aplicación React Vite para el frontend, y utiliza PostgreSQL como base de datos.

## Configuración del entorno

Antes de ejecutar la aplicación, es necesario configurar algunas variables de entorno. Se proporciona un archivo `.env` en la carpeta base para la configuración general, y cada componente (backend y frontend) para las configuraciones específicas.

### Archivo `.env` en la carpeta base

```dotenv
## Back Docker
BACK_PORT=5000
DB_PORT=5435
DB_HOST=postgres-biotik
DB_USER=odk_web
DB_PASSWORD=nuevopassword
DB_NAME=biotik
JWT_SECRET=secreto

## Front Docker
VITE_API_URL=http://127.0.0.1:5035/datos

# Base de datos
POSTGRES_USER=odk_web
POSTGRES_PASSWORD=nuevopassword
POSTGRES_DB=biotik

# PgAdmin
PGADMIN_DEFAULT_EMAIL=correo@ejemplo.com
PGADMIN_DEFAULT_PASSWORD=nuevopassword
PGADMIN_LISTEN_ADDRESS=0.0.0.0
PGADMIN_SERVER_MODE=true
```

Asegúrese de cambiar los valores proporcionados a valores seguros y específicos de su configuración.


### Archivo `.env` en la carpeta biotik-web

Es necesario crear una variable de entorno para la URL del backend. Para ello, cree un archivo `.env` en la carpeta `biotik-web` con el siguiente contenido (esto es solo para la construcción del contenedor del frontend en su Dockerfile):

```dotenv
## Front Docker
VITE_API_URL=http://127.0.0.1:5035/datos
```
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
- PgAdmin: [http://127.0.0.1:8035](http://127.0.0.1:8035)

Asegúrese de que los puertos especificados no estén en uso y ajuste según sea necesario. 
