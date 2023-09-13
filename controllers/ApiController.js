const Usuario = require("../models/usuario");

class ApiController{

    //Administração dbo.Usuario
  
   async findusuario(req, res){
    var ide_usuario = req.params.ide_usuario;
    var usuario = await Usuario.findById(ide_usuario)
    if(usuario == undefined){
        res.status(404);
        res.json({});
    }else{
        res.status(200)
        res.json(usuario);
    }

 }
 async usuariosave(req, res) {

    var {nom_usuario, tex_login, ind_bloqueado, nom_usuario_criador, dat_criacao, nom_usuario_ultima_alteracao,  dat_ultima_alteracao, num_telefone} = req.body;       
    
    await Usuario.UsuarioSave(nom_usuario, tex_login, ind_bloqueado, nom_usuario_criador, dat_criacao, nom_usuario_ultima_alteracao,  dat_ultima_alteracao, num_telefone);
   
 }
 async listausuario(req, res) {

    var usuarios = await Usuario.findAll();
    res.json(usuarios);  


 }
 async updateusuario(req, res) {

    var {ide_usuario, nom_usuario, tex_login, ind_bloqueado, nom_usuario_criador, dat_criacao, nom_usuario_ultima_alteracao,  dat_ultima_alteracao, num_telefone} = req.body;
    
    await Usuario.UsuarioUpdate(ide_usuario, nom_usuario, tex_login, ind_bloqueado, nom_usuario_criador, dat_criacao, nom_usuario_ultima_alteracao,  dat_ultima_alteracao, num_telefone);
          
 }

 async deleteusuario(req, res) {
    var ide_usuario =  req.params.ide_usuario      
    await Usuario.UsuarioDelete(ide_usuario);
 

}

}

module.exports = new ApiController();