const mongoose = require('mongoose');
const { Schema } = mongoose;

const Admin = new Schema({
  name: { type: String, required: true },  
  dni: { type: Number, required: true },
  telefono: {type: Number, required: true},
  tipo: {type: String, required: true}  
});

module.exports = mongoose.model('Admin', Admin);