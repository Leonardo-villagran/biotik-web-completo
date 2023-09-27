-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         PostgreSQL 15.4 (Debian 15.4-2.pgdg110+1) on x86_64-pc-linux-gnu, compiled by gcc (Debian 10.2.1-6) 10.2.1 20210110, 64-bit
-- SO del servidor:              
-- HeidiSQL Versión:             12.5.0.6691
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES  */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Volcando estructura para tabla public.web
CREATE TABLE IF NOT EXISTS "web" (
	"id_web" SERIAL NOT NULL,
	"titulo" VARCHAR(255) NULL DEFAULT NULL,
	"contenido" TEXT NULL DEFAULT NULL,
	"fecha_creacion" TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
	"fecha_modificacion" TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
	"tipo_orden" INTEGER NULL DEFAULT NULL,
	"imagen" VARCHAR(255) NULL DEFAULT NULL,
	"id_css" VARCHAR(255) NULL DEFAULT NULL,
	PRIMARY KEY ("id_web")
);

-- Volcando datos para la tabla public.web: -1 rows
DELETE FROM "web";
/*!40000 ALTER TABLE "web" DISABLE KEYS */;
INSERT INTO "web" ("id_web", "titulo", "contenido", "fecha_creacion", "fecha_modificacion", "tipo_orden", "imagen", "id_css") VALUES
	(DEFAULT, 'Procesamiento y descarga de datos', 'Una vez que los datos han sido recolectados a través de la aplicación ODK Collect en smartphones, son almacenados en el servidor en la nube ODK Central. En este punto, comienza el proceso de limpieza y procesamiento de los datos para asegurar su calidad y consistencia. Este proceso incluye la eliminación de valores atípicos, la corrección de errores y la estandarización de los datos. Una vez que los datos han sido procesados, están listos para ser descargados por el cliente en formato tabulado. Esto permite al cliente analizar y visualizar los datos de manera más eficiente, lo que puede ayudar a tomar decisiones informadas y mejorar la toma de decisiones en el futuro.', '2023-09-24 04:56:59.738978', '2023-09-24 04:56:59.738978', 5, './images/5.jpg', 'data-processing'),
	(DEFAULT, '¿Por qué elegir BiotiK?', 'BiotiK es la mejor opción para la toma de datos en terreno debido a su especialización en servicios de toma de datos digitales. Utilizamos la aplicación ODK Collect en smartphones para recopilar datos de manera eficiente y precisa, lo que nos permite ofrecer resultados más rápidos y precisos a nuestros clientes. Además, la seguridad de los datos es una de nuestras principales preocupaciones. Implementamos medidas de seguridad rigurosas para garantizar la protección de los datos de nuestros clientes en todo momento. Desde el almacenamiento seguro en nuestro servidor en la nube ODK Central hasta la limpieza y procesamiento de los datos, nos aseguramos de que sus datos estén siempre protegidos.', '2023-09-24 04:56:59.738978', '2023-09-24 04:56:59.738978', 6, './images/6.jpg', 'why-choose-biotik'),
	(DEFAULT, '¿Qué es BiotiK?', 'BiotiK es una empresa especializada en servicios de toma de datos en terreno de manera digital. Utilizamos la aplicación ODK Collect en smartphones para recopilar información de manera eficiente y precisa. Nuestro enfoque en la digitalización de la toma de datos nos permite ofrecer soluciones personalizadas a nuestros clientes, adaptándonos a sus necesidades específicas y optimizando los procesos de recolección de datos.', '2023-09-24 04:51:57.116687', '2023-09-24 04:51:57.116687', 1, './images/1.jpg', 'about-biotik'),
	(DEFAULT, '¿Cómo funciona?', 'El proceso de toma de datos con BiotiK comienza con la descarga de la aplicación ODK Collect en un smartphone. Esta aplicación permite la captura de datos en terreno de manera digital, lo que aumenta la eficiencia y precisión de la recolección de información. Una vez que los datos son capturados en la aplicación ODK Collect, se almacenan en el servidor en la nube ODK Central. Este servidor es altamente seguro y confiable, garantizando la protección de los datos de los clientes. Además, el acceso a los datos almacenados en el servidor es fácil y rápido, lo que permite una gestión eficiente de la información recolectada.', '2023-09-24 04:56:59.738978', '2023-09-24 04:56:59.738978', 2, './images/2.jpg', 'how-it-works'),
	(DEFAULT, 'Ventajas de los servicios de BiotiK', 'BiotiK ofrece una solución eficiente y precisa para la toma de datos en terreno. Al utilizar nuestra aplicación ODK Collect en smartphones, los encuestadores pueden capturar datos de forma rápida y sencilla, sin necesidad de llevar consigo grandes cantidades de papel y formularios. Además, nuestros servicios de almacenamiento en la nube ODK Central garantizan que los datos estén siempre disponibles y seguros, sin riesgo de pérdida o daño. Con la capacidad de acceder a los datos desde cualquier lugar y en cualquier momento, los clientes pueden tomar decisiones informadas con mayor rapidez y precisión.', '2023-09-24 04:56:59.738978', '2023-09-24 04:56:59.738978', 3, './images/3.jpg', 'advantages'),
	(DEFAULT, 'Seguridad de los datos', 'En BiotiK, nos tomamos muy en serio la seguridad de los datos de nuestros clientes. Es por eso que hemos implementado una serie de medidas de seguridad para garantizar que los datos estén protegidos en todo momento. Entre estas medidas se incluyen el cifrado de extremo a extremo, la autenticación de dos factores y la supervisión constante del servidor en la nube ODK Central. Además, todos nuestros empleados están capacitados en prácticas de seguridad de datos y tienen acceso limitado a la información del cliente para garantizar la privacidad y confidencialidad de los datos.', '2023-09-24 04:56:59.738978', '2023-09-24 04:56:59.738978', 4, './images/4.jpg', 'data-security');
/*!40000 ALTER TABLE "web" ENABLE KEYS */;

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
