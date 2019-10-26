const mongoose = require('mongoose');
const {Schema} = mongoose;

const Curso = new Schema ({
    nombre: String
});

module.exports = mongoose.model('Curso', Curso);