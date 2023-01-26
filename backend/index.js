// Importar express, mongoose y variables de entorno
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

// Importar Cors para las peticiones HTTP
const cors = require("cors");

// Importar archivo con la conexión de la base de datos
const connectDB = require("./mongoDB");

// Importar archivo con las rutas del usuario
const routes = require("./routes/index");

// Puerto de conexión del servidor
const PORT = process.env.PORT || 5000;

// App
const app = express();

// Usar express
app.use(express.json());

// Usar cors
app.use(cors());

// Usar conexión de la base de datos
connectDB();

// Uso de las rutas
// app.use('/api', routes)

// Conexión del servidor
app.get("/", (req, res) => {
  res.send("Hola desde el servidor");
});

app.listen(PORT, (req, res) => {
  console.log(`Server is running on port ${PORT}`);
});
