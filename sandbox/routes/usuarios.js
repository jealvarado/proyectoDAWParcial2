'use strict'

var express = require('express');
var router = express.Router();

var usuarioCtrl = require('../controllers/usuario');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/:usuarioId', usuarioCtrl.getUsuario);
router.get('/', usuarioCtrl.getUsuarios);
router.post('/', usuarioCtrl.saveUsuario);
router.put('/:usuarioId', usuarioCtrl.updateUsuario);
router.delete('/:usuarioId', usuarioCtrl.deleteUsuario);


module.exports = router;