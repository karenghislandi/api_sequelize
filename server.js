require("dotenv").config({path:".env"});
const express = require('express');
const bodyParser = require('body-parser');
const controllerReserva = require('./controller/indexReserva');
const controllerAreas = require('./controller/indexAreasLazer');
const auth = require("./middleware/auth");


const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('bem vindo!'));


app.use('/reservas', controllerReserva.reservas);
app.use('/areas', controllerAreas.areas);

app.listen(process.env.PORT, () => console.log(`Servidor conectado na porta${process.env.PORT}!`));