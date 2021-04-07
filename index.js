// const express = require('express');
// const router = require('./routes/index.js');
// const {db} = require('./config/db.js');
import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

const app = express();

db.authenticate()
.then( () => console.log('Base de datos conectada'))
.catch( error => console.log(error, 'hubo un error!'))

const port = process.env.PORT || 4000;

app.set('view engine','pug');

app.use((req, res, next) => {
  const date = new Date();
  res.locals.dateNow = date.getFullYear();
  res.locals.nameSite = "Agencia de Viajes:";
  next();
});

//midleware para leer el formulario
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use('/', router);


app.listen(port, () =>{
    console.log(`Server on port ${port}`)
});
