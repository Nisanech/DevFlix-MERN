const mongoose = require("mongoose");

/*
 * ======================================
 *  Apartir de aquí es la conexión Local
 * ======================================
 */

// URL base de datos local
const URI = "mongodb://127.0.0.1:27017/devflix";

const connectDB = () => {
  mongoose
    .connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Base de datos conectada"))
    .catch(console.error);
};

module.exports = connectDB;
