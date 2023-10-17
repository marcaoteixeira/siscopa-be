const produto = require("../models/produto");

class ApiController{

   //Administração dbo.produto
  
   async findproduto(req, res){
    var ide_produto = req.params.ide_produto;
    var produto = await produto.findById(ide_produto)
    if(produto == undefined){
        res.status(404);
        res.json({});
    }else{
        res.status(200)
        res.json(produto);
    }

 }
 async produtosave(req, res) {

    var {nom_produto, tex_login, ind_bloqueado, nom_produto_criador, dat_criacao, nom_produto_ultima_alteracao,  dat_ultima_alteracao, num_telefone} = req.body;       
    
    await produto.produtoSave(nom_produto, tex_login, ind_bloqueado, nom_produto_criador, dat_criacao, nom_produto_ultima_alteracao,  dat_ultima_alteracao, num_telefone);
   
 }
 async listaproduto(req, res) {

    var produtos = await produto.findAll();
    res.json(produtos);  


 }
 async updateproduto(req, res) {

    var {ide_produto, nom_produto, tex_login, ind_bloqueado, nom_produto_criador, dat_criacao, nom_produto_ultima_alteracao,  dat_ultima_alteracao, num_telefone} = req.body;
    
    await produto.produtoUpdate(ide_produto, nom_produto, tex_login, ind_bloqueado, nom_produto_criador, dat_criacao, nom_produto_ultima_alteracao,  dat_ultima_alteracao, num_telefone);
          
 }

 async deleteproduto(req, res) {
    var ide_produto =  req.params.ide_produto      
    await produto.produtoDelete(ide_produto);
 

}

//Administração dbo.Produto
  
async findproduto(req, res){
   var ide_produto = req.params.ide_produto;
   var produto = await produto.findById(ide_produto)
   if(produto == undefined){
       res.status(404);
       res.json({});
   }else{
       res.status(200)
       res.json(produto);
   }

}
async produtosave(req, res) {

   await produto.produtoSave(nom_produto, num_preco, nom_usuario_criador, dat_criacao, nom_usuario_ultima_alteracao,  dat_ultima_alteracao, ind_bloqueado);  
}
async listaproduto(req, res) {
   var produtos = await produto.findAll();
   res.json(produtos);  
}

async updateproduto(req, res) {

   var {ide_produto, nom_produto, tex_login, ind_bloqueado, nom_produto_criador, dat_criacao, nom_produto_ultima_alteracao,  dat_ultima_alteracao, num_telefone} = req.body;
   
   await produto.produtoUpdate(ide_produto, nom_produto, tex_login, ind_bloqueado, nom_produto_criador, dat_criacao, nom_produto_ultima_alteracao,  dat_ultima_alteracao, num_telefone);
         
}

async deleteproduto(req, res) {
   var ide_produto =  req.params.ide_produto      
   await produto.produtoDelete(ide_produto);
}

//Administração dbo.Compra
  
async findproduto(req, res){
   var ide_produto = req.params.ide_produto;
   var produto = await produto.findById(ide_produto)
   if(produto == undefined){
       res.status(404);
       res.json({});
   }else{
       res.status(200)
       res.json(produto);
   }

}
async produtosave(req, res) {

   await produto.produtoSave(nom_produto, num_preco, nom_usuario_criador, dat_criacao, nom_usuario_ultima_alteracao,  dat_ultima_alteracao, ind_bloqueado);  
}
async listaproduto(req, res) {
   var produtos = await produto.findAll();
   res.json(produtos);  
}

async updateproduto(req, res) {

   var {ide_produto, nom_produto, tex_login, ind_bloqueado, nom_produto_criador, dat_criacao, nom_produto_ultima_alteracao,  dat_ultima_alteracao, num_telefone} = req.body;
   
   await produto.produtoUpdate(ide_produto, nom_produto, tex_login, ind_bloqueado, nom_produto_criador, dat_criacao, nom_produto_ultima_alteracao,  dat_ultima_alteracao, num_telefone);
         
}

async deleteproduto(req, res) {
   var ide_produto =  req.params.ide_produto      
   await produto.produtoDelete(ide_produto);
}

}

module.exports = new ApiController();