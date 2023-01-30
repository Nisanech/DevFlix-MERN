// Importar express
const express = require("express");

// Constante para hacer uso del método router de express
const router = express.Router();

// Importar métodos desde el controlador
const {signup} = require("../controllers/userController");

// Se definen las rutas con sus respectivos métodos para las peticiones HTTP
router.post('/signup', signup)

// Exportar el archivo
module.exports = router;
