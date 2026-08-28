const Usuario = require("../model/UsuarioModel")

const GetUsuarios = async(req, res) => {
    const users = await Usuario.find()
    res.json(users)
}

const GetUsuario = async(req, res) => {
    const user = await Usuario.findById(req.params.id)
    res.json(user)
}

const CreateUsuario = async(req, res) => {
    const user = await Usuario.create(req.body)
    res.json(user)
}

const UpdateUsuario = async(req, res) => {
    const user = await Usuario.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    )
    res.json(user)
}

const DeleteUsuario = async(req, res) =>{
    await Usuario.findByIdAndDelete(req.params.id)
    res.json({
        message:'Deletado o usuario'
    })
}

module.exports = {
    GetUsuarios,
    GetUsuario,
    CreateUsuario,
    UpdateUsuario,
    DeleteUsuario
}