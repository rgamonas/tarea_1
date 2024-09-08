Proyecto CRUD de Usuarios con Node.js, Express y MySQL
Este proyecto implementa un CRUD sencillo de usuarios utilizando Node.js, Express y MySQL, siguiendo el patrón MVC. Los usuarios pueden ser creados, leídos, actualizados y eliminados en la base de datos MySQL. Se utiliza UUID como identificador único para cada usuario.

Requisitos previos
Node.js y npm instalados (https://nodejs.org/)
MySQL instalado (por ejemplo, usando XAMPP, MAMP, WAMP o MySQL Server directamente)
Git (opcional, si deseas clonar el repositorio)

Instalar dependencias
Una vez dentro del directorio del proyecto, instala las dependencias necesarias ejecutando:

npm install
Las dependencias principales incluyen:

Express: Framework para crear aplicaciones web.
MySQL2: Para conectarse a MySQL.
UUID: Para generar identificadores únicos.
Dotenv: Para manejar variables de entorno. 

Crea un archivo .env en la raíz del proyecto con la configuración de la base de datos MySQL. Por ejemplo:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=tarea_1
PORT=3300 

Configurar la base de datos
Crear la base de datos y la tabla
Conéctate a MySQL usando tu terminal o phpMyAdmin, y crea la base de datos y la tabla users. Puedes hacerlo ejecutando el siguiente script:

-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS tarea_1;

-- Usar la base de datos
USE tarea_1;

-- Crear la tabla users
CREATE TABLE users (
id CHAR(36) PRIMARY KEY,
nombre VARCHAR(100),
apellido_paterno VARCHAR(100),
apellido_materno VARCHAR(100),
dni VARCHAR(8) NOT NULL,
tipo_documento VARCHAR(50),
telefono VARCHAR(9),
correo VARCHAR(100)
);

Insertar datos de prueba
Después de crear la tabla, puedes insertar algunos registros de prueba ejecutando este script:

-- Insertar registros de prueba
INSERT INTO users (id, nombre, apellido_paterno, apellido_materno, dni, tipo_documento, telefono, correo)
VALUES (UUID(), 'Carlos', 'Pérez', 'García', '12345678', 'DNI', '987654321', 'carlos.perez@gmail.com');

INSERT INTO users (id, nombre, apellido_paterno, apellido_materno, dni, tipo_documento, telefono, correo)
VALUES (UUID(), 'María', 'Rodríguez', 'Gómez', '87654321', 'DNI', '912345678', 'maria.rodriguez@gmail.com');

INSERT INTO users (id, nombre, apellido_paterno, apellido_materno, dni, tipo_documento, telefono, correo)
VALUES (UUID(), 'Juan', 'Torres', 'Fernández', '11223344', 'DNI', '923456789', 'juan.torres@hotmail.com');

INSERT INTO users (id, nombre, apellido_paterno, apellido_materno, dni, tipo_documento, telefono, correo)
VALUES (UUID(), 'Ana', 'Jiménez', 'Ramírez', '22334455', 'DNI', '934567890', 'ana.jimenez@yahoo.com'); 5. Ejecutar la aplicación
Para iniciar el servidor de desarrollo, simplemente ejecuta:

npm start
Si deseas que el servidor se reinicie automáticamente cada vez que realices un cambio en el código, puedes instalar nodemon y usarlo con: npm install --save-dev nodemon

Luego, puedes modificar el package.json para usar nodemon en el entorno de desarrollo:
"scripts": {
"start": "node app.js",
"dev": "nodemon app.js"
}
Ahora puedes ejecutar el servidor en modo desarrollo con:

npm run start. Acceder a la aplicación
Una vez que el servidor esté en funcionamiento, abre tu navegador y ve a:
http://localhost:3300
Aquí podrás ver la lista de usuarios, crear nuevos, editar y eliminar usuarios.

Rutas de la API
GET / - Listar todos los usuarios
GET /create - Mostrar formulario para crear un nuevo usuario
POST /create - Crear un nuevo usuario
GET /edit/:id - Mostrar formulario para editar un usuario existente
POST /edit/:id - Actualizar un usuario
GET /delete/:id - Eliminar un usuario