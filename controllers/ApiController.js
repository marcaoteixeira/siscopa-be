const produto = require("../models/Produto")
const usuario = require("../models/Usuario");
const compra = require("../models/Compra");


class ApiController{

   //Administração dbo.usuario
  
   async findusuario(req, res){
    var ide_usuario = req.params.ide_usuario;
    var usuarios = await usuario.findById(ide_usuario)
    if(usuarios == undefined){
        res.status(404);
        res.json({});
    }else{
        res.status(200)
        res.json(usuarios);
    }

 }
 async usuariosave(req, res) {

    var {ide_usuario, nom_usuario, tex_login, ind_bloqueado, nom_usuario_criador, dat_criacao, nom_usuario_ultima_alteracao,  dat_ultima_alteracao, num_telefone} = req.body;       
    
    await usuario.UsuarioSave(nom_usuario, tex_login, ind_bloqueado, nom_usuario_criador, dat_criacao, nom_usuario_ultima_alteracao,  dat_ultima_alteracao, num_telefone);
   
 }
 async listausuario(req, res) {

    var usuarios = await usuario.findAll();
    res.json(usuarios);  


 }
 async updateusuario(req, res) {

    var {ide_usuario, nom_usuario, tex_login, ind_bloqueado, nom_usuario_criador, dat_criacao, nom_usuario_ultima_alteracao,  dat_ultima_alteracao, num_telefone} = req.body;
    
    await usuario.UsuarioUpdate(ide_usuario, nom_usuario, tex_login, ind_bloqueado, nom_usuario_criador, dat_criacao, nom_usuario_ultima_alteracao,  dat_ultima_alteracao, num_telefone);
          
 }

 async deleteusuario(req, res) {
    var ide_usuario =  req.params.ide_usuario      
    await usuario.usuarioDelete(ide_usuario); 

}

//Administração dbo.Compras
  
async findcompra(req, res){
   var ide_compra = req.params.ide_compra;
   var compras = await compra.findById(ide_compra)
   if(compras == undefined){
       res.status(404);
       res.json({});
   }else{
       res.status(200)
       res.json(compras);
   }

}
async comprasave(req, res) {

   await compra.compraSave(ide_compra, ide_usuario, qtd_produto, dat_compra, ind_pago, nom_usuario_criador, dat_criacao, nom_usuario_ultima_alteracao, dat_ultima_alteracao);  
}
async listacompra(req, res) {
   var compras = await compra.findAll();
   res.json(compra);  
}

async updatecompra(req, res) {

   var {ide_compra, ide_usuario, qtd_produto, dat_compra, ind_pago, nom_usuario_criador, dat_criacao, nom_usuario_ultima_alteracao, dat_ultima_alteracao} = req.body;
   
   await compra.compraUpdate(ide_compra, ide_usuario, qtd_produto, dat_compra, ind_pago, nom_usuario_criador, dat_criacao, nom_usuario_ultima_alteracao, dat_ultima_alteracao);
         
}

async deletecompra(req, res) {
   var ide_compra =  req.params.ide_compra      
   await compra.compraDelete(ide_compra);
}

//Administração dbo.produto
  
async findproduto(req, res){
   console.log(req.params.id)
   var id = req.params.id;   
   console.log(id)
   var produtos = await produto.findById(id)
   if(produto == undefined){
       res.status(404);
       res.json({});
   }else{
       res.status(200)
       res.json(produtos);
   }

}
async produtosave(req, res) {
   
   var {nom_produto, num_preco, nom_usuario_criador, dat_criacao, nom_usuario_ultima_alteracao,  dat_ultima_alteracao, ind_bloqueado} = req.body;
   await produto.produtoSave(nom_produto, num_preco, nom_usuario_criador, dat_criacao, nom_usuario_ultima_alteracao,  dat_ultima_alteracao, ind_bloqueado)
}
async listaproduto(req, res) {
   var produtos = await produto.findAll();
   res.json(produtos);  
}

async updateproduto(req, res) {

   var {ide_produto, nom_produto, num_preco, nom_usuario_criador, dat_criacao, nom_usuario_ultima_alteracao,  dat_ultima_alteracao, ind_bloqueado} = req.body;   
   await produto.produtoUpdate(ide_produto, nom_produto, num_preco, nom_usuario_criador, dat_criacao, nom_usuario_ultima_alteracao,  dat_ultima_alteracao, ind_bloqueado);
         
}

async deleteproduto(req, res) {
   var ide_produto =  req.params.ide_produto      
   await produto.produtoDelete(ide_produto);
}

}

module.exports = new ApiController();