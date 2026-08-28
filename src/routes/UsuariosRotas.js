const express = require('express')

const router = express.Router()

const userController = require('../controller/UsuarioController')

router.get('/', userController.GetUsuarios)

router.get('/:id', userController.GetUsuario)

router.post('/', userController.CreateUsuario)

router.put('/:id', userController.UpdateUsuario)

router.delete('/:id', userController.DeleteUsuario)

module.exports = router