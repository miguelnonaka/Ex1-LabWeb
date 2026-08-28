const mongoose = require('mongoose')

const schemaUsuario = new mongoose.Schema({
    Nome: String,
    Sobrenome: String,
    Email: String,
    Celular: String,
    Genero: String
})

module.exports = mongoose.model("Usuario", schemaUsuario)