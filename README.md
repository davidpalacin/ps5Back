# Backend
Este proyecto es un backend desarrollado con Node.js, Express, MongoDB y Mongoose.

## Instalación
1. Descargue el repositorio y descomprima los archivos en una carpeta local.
2. Instale las dependencias necesarias ejecutando `npm install` en la raíz del proyecto.
3. Inicie el servidor ejecutando `npm run dev` en la raíz del proyecto.

## Características
- Rutas para obtener todos los usuarios (`/users`) con autenticación de token y verificación de super admin
- Ruta para obtener un usuario por nombre (`/users/:name`)
- Ruta para eliminar un usuario por ID (`/users/delete/:id`)
- Ruta para eliminar una película de un usuario (`/users/:id/deleteMovie/:movieId`)
- Ruta para actualizar las películas de un usuario (`/users/update/:id`)
- Ruta para marcar una película como vista de un usuario (`/users/:id/check/:movieId`)

## Nota
- Asegúrese de tener una instancia de MongoDB en ejecución antes de iniciar el servidor.
- También asegúrese de configurar las credenciales de acceso a la base de datos en el archivo `.env` antes de iniciar el servidor.
