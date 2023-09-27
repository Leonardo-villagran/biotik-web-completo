require('dotenv').config();
const  pool = require('./config/db');
const express = require('express');
const cors = require('cors');
const checkDatabaseConnection = require('./middleware/web');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware de CORS
app.use(cors());

// Utiliza el middleware de verificación de conexión a la base de datos
app.use(checkDatabaseConnection);

// Ruta principal que responde con "Hola Mundo"
app.get('/', (req, res) => {
    res.send('Hola Mundo');
});



// Ruta para consultar datos de la base de datos
app.get('/datos', async (req, res) => {
    try {
        // Ejecuta una consulta a la base de datos utilizando el pool
        const cy= 'SELECT * FROM web order by tipo_orden;';
        const resultado = await pool.query(cy);
        // Envía la respuesta con los datos de la consulta
        console.log('Datos enviados.');
        res.json(resultado.rows);
    } catch (error) {
        console.error('Error al consultar la base de datos', error.message);
        res.status(500).json({ error: error.message });
    }
});

// Puerto en el que se ejecutará el servidor
const back_port = process.env.BACK_PORT;

app.listen(back_port, () => {
    console.log(`Servidor escuchando en el puerto ${back_port}`);
});

console.log("Imprimir variables de entorno");
console.log(
    {   host: process.env.DB_HOST,
        db_user: process.env.DB_USER,
        db_port: process.env.DB_PORT,
        // password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        back_port: process.env.BACK_PORT
    });
