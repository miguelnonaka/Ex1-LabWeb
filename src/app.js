const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);

const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const usuarioRoutes = require('./routes/UsuariosRotas')

const app = express()

const mongoUri = process.env.MONGO_URI;
const port = process.env.PORT || 3067;

app.use(express.json())
app.use(express.static(path.join(__dirname, '..', 'public')))
app.use("/users", usuarioRoutes)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})

mongoose.connect(mongoUri)
    .then(() => {
        console.log("Mongo conectado")
    })
    .catch((error) => {
        console.log("Erro ao conectado no mongo:",error)
    });

app.listen(port, () =>{
    console.log(`Conectado na porta ${port}`)
})