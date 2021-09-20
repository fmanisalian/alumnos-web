const express = require('express');
const morgan = require('morgan');

const app = express();
const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb://localhost/alumnos-db', {
  useCreateIndex: true,
  useNewUrlParser: true
})
  .then(db => console.log('DB está conectada'))
  .catch(err => console.error(err));

// settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(morgan('dev'));
app.use(express.json());

// routes
app.use('/alumnos', require('./routes/alumnos'));
app.use('/cursos', require('./routes/cursos'));
app.use('/users', require('./routes/users'));
app.use('/admins', require('./routes/admins'));

// static
app.use(express.static(__dirname + "/public"));

// listenning on port
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
  });