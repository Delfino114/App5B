require('dotenv').config();
const express = require('express');
const mongoose= require('mongoose');

//declaramos nuestra variable app para manejar express
const app = express();
const PORT = process.env.PORT||3000;

//creamos el midLeware(entrada o configuracion del documento para que pueda trabajar o manejar soporte para JSON)
app.use(express.json());

//conectamos a mongo altas
mongoose.connect(process.env.MONGO_URI) //ya no son necesarios los parametros en las nuevas versiones de mongoose asi que se pueden quitar 

/*
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
*/

.then(()=>console.log('Conectado mongo atlas'))
.catch((error)=>console.log('Error al conectar a mongo atlas', error));