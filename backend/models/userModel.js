// Importar mongoose
const mongoose = require("mongoose");

// Definir la estructura del modelo
const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
});

// Declaramos variable que contendrá el modelo para poder exportarlo
const User = mongoose.model("User", userSchema);

module.exports = User;
