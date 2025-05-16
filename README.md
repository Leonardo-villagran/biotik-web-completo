# Proyecto Biotik

![BiotiK Logo](https://raw.githubusercontent.com/Leonardo-villagran/biotik-web-completo/refs/heads/main/biotik-web/public/images/logo3.png)

## Indice

- [Descripción](#descripción)
- [Capturas de Pantalla](#capturas-de-pantalla)
- [Configuración del Entorno](#configuración-del-entorno)
  - [Archivo `.env`](#archivo-env-en-la-carpeta-base)
- [Docker Compose](#docker-compose)
- [Ejecución](#ejecución)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)

### Descripción

Este repositorio contiene los archivos necesarios para ejecutar la aplicación Biotik, que incluye un servidor Express para el backend, una aplicación React Vite para el frontend, y utiliza PostgreSQL como base de datos. Además de ser la página principal de la empresa, permite dar acceso a los usuarios a la información de los proyectos que se encuentran en el servidor ODK Central y al sistema de gestión de información de ODK.

### Capturas de Pantalla

![Pantalla de Inicio](https://raw.githubusercontent.com/Leonardo-villagran/biotik-web-completo/refs/heads/main/biotik-web/public/images/screenshot3.png)


![Proceso de Trabajo](https://raw.githubusercontent.com/Leonardo-villagran/biotik-web-completo/refs/heads/main/biotik-web/public/images/screenshot4.png)

### Configuración del entorno

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

### Docker Compose

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

### Tecnologías Utilizadas

La aplicación utiliza las siguientes tecnologías y herramientas:

- [React](https://reactjs.org/): Una biblioteca de JavaScript para construir interfaces de usuario.
- [Tailwind CSS](https://tailwindcss.com/): Un framework de CSS de utilidad primero para construir rápidamente diseños personalizados.
- [Vite](https://vitejs.dev/): Un marco de desarrollo web rápido que permite una experiencia de desarrollo extremadamente rápida.
- [Node.js](https://nodejs.org/): Un entorno de ejecución para JavaScript del lado del servidor.
- [Express](https://expressjs.com/): Un marco de aplicación web para Node.js.
- [PostgreSQL](https://www.postgresql.org/): Un sistema de gestión de bases de datos relacional de código abierto.
- [Framer Motion](https://www.framer.com/motion/): Una biblioteca de animación para React.