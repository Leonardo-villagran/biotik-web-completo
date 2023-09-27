# BiotiK Web App

![BiotiK Logo](https://github.com/Leonardo-villagran/biotik-web/blob/main/public/images/logo.png?raw=true)

La aplicación web BiotiK es una plataforma de análisis de información que ofrece soluciones avanzadas para la recolección y procesamiento de datos. Este README proporciona información sobre la estructura de la aplicación y cómo ejecutarla localmente.

## Contenido

- [Capturas de Pantalla](#capturas-de-pantalla)
- [Instrucciones de Uso](#instrucciones-de-uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)

## Capturas de Pantalla

![Pantalla de Inicio](https://github.com/Leonardo-villagran/biotik-web/blob/main/public/images/screenshot1.png?raw=true)


![Proceso de Trabajo](https://github.com/Leonardo-villagran/biotik-web/blob/main/public/images/screenshot2.png?raw=true)


## Instrucciones de Uso

Para ejecutar la aplicación de manera local, sigue estos pasos:

1. Clona este repositorio en tu máquina local:

   ```shell
   git clone https://github.com/Leonardo-villagran/biotik-web
   ```

2. Navega al directorio del proyecto:

   ```shell
   cd biotik-web-app
   ```

3. Instala las dependencias utilizando npm:

   ```shell
   npm install
   ```

4. Inicia la aplicación:

   ```shell
   npm start
   ```

5. Abre tu navegador web y visita [http://localhost:3000](http://localhost:3000) para ver la aplicación en funcionamiento.

## Estructura del Proyecto

El proyecto se estructura de la siguiente manera:

```
biotik-web-app/
  ├── public/
  │   ├── images/
  │   │   ├── logo.png
  │   │   ├── screenshot1.png
  │   │   ├── screenshot2.png
  │   │   └── ...
  │   ├── index.html
  │   └── ...
  ├── src/
  │   ├── views/
  │   │   ├── AboutBiotik.js
  │   │   ├── HowItWorks.js
  │   │   ├── Advantages.js
  │   │   ├── DataSecurity.js
  │   │   ├── DataProcessing.js
  │   │   ├── WhyChooseBiotik.js
  │   │   └── ...
  │   ├── App.css
  │   ├── App.js
  │   ├── Header.js
  │   ├── Menu.js
  │   └── ...
  ├── package.json
  ├── README.md
  └── ...
```

## Tecnologías Utilizadas

La aplicación utiliza las siguientes tecnologías y herramientas:

- [React](https://reactjs.org/): Una biblioteca de JavaScript para construir interfaces de usuario.
- [Bootstrap](https://getbootstrap.com/): Un marco de diseño CSS para la creación de páginas web receptivas y modernas.