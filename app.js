const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(bodyParser.json());

// Cargar rutas
app.use('/api', userRoutes);

module.exports = app;
