const mongoose = require('mongoose');

const { Schema } = mongoose;

const Alumno = new Schema({
  apellido: String,
  nombre: String,
  dni: Number,
  colegio: String,
  ingresa: Boolean,
  cursoPertenece: String,
  fecha: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Alumno', Alumno);