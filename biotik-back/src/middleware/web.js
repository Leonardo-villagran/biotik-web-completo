const  pool  = require('../config/db');

// Middleware para verificar la conexión a la base de datos
const checkDatabaseConnection = async (req, res, next) => {
    try {
        // Comprueba la conexión a la base de datos ejecutando una consulta simple
        const client = await pool.connect();
        client.release();
        console.log(`* Existe conexión a la base de datos, puede continuar.`);
        console.log(`--------------------------------------------------------`);
        next(); // Continúa con la siguiente función de middleware o ruta
    } catch (error) {
        console.error('Error al conectar con la base de datos', error.message);
        res.status(500).json({ error: error.message });
    }
};

module.exports = checkDatabaseConnection;
