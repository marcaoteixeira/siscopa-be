var express = require("express");
var router = express.Router();
const HomeController = require("../controllers/HomeController");
const ApiController = require("../controllers/ApiController");



router.get('/',HomeController.index);

router.get('/admin/usuario/:ide_usuario',ApiController.findusuario);
router.post('/admin/usuario/new',ApiController.usuariosave);
router.post('/admin/usuario/list',ApiController.listausuario);
router.put('/admin/usuario/update',ApiController.updateusuario);
router.delete('/admin/usuario/delete/:ide_usuario',ApiController.deleteusuario);

module.exports = router;
