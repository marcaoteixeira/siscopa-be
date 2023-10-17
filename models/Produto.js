const express = require("express");
const router = express.Router();
var knex = require("../database/conection");

class Produto {
    async findAll(){
        try{
            var result = await knex.select(['ide_produto', 'nom_produto', 'num_preco', 'nom_usuario_criador', 'dat_criacao', 'nom_usuario_ultima_alteracao',  'dat_ultima_alteracao', 'ind_bloqueado']).table("dbo.produto");            
            return result;
        }catch(error){
            console.log(error);
            return[];
    }

    }
    async findById(ide_usuario){                
        try{
            var result = await knex.select(['ide_produto', 'nom_produto', 'num_preco', 'nom_usuario_criador', 'dat_criacao', 'nom_usuario_ultima_alteracao',  'dat_ultima_alteracao', 'ind_bloqueado']).where({ide_produto:ide_produto}).table("dbo.produto");
           
            if(result.length > 0){
                return result[0];
            }else{
                return undefined;
            }                     
        }catch(error){
            console.log(error);
            return undefined;            
        }
    }
    async UsuarioSave(nom_produto, num_preco, nom_usuario_criador, dat_criacao, nom_usuario_ultima_alteracao,  dat_ultima_alteracao, ind_bloqueado){
        try{                       
            await knex.insert({ nom_produto, num_preco, nom_usuario_criador, dat_criacao, nom_usuario_ultima_alteracao,  dat_ultima_alteracao, ind_bloqueado}).table("dbo.produto");
            console.log("Produto Cadastrado com sucesso!!!")
        }catch(error){
            console.log(error);            

        }
    }  
    async UsuarioUpdate(ide_produto, nom_produto, num_preco, nom_usuario_criador, dat_criacao, nom_usuario_ultima_alteracao,  dat_ultima_alteracao, ind_bloqueado){
        try{                       
            await knex.where({ide_produto: ide_produto}).update({ nom_produto, num_preco, nom_usuario_criador, dat_criacao, nom_usuario_ultima_alteracao,  dat_ultima_alteracao, ind_bloqueado}).table("dbo_alinea")
            console.log("Produto Alterado com sucesso com sucesso!!!")
        }catch(error){
            console.log(error);          

        }
    } 
    async UsuarioDelete(ide_produto){
        try{                       
            await knex.where({ide_produto: ide_produto}).delete().table("dbo.produto")
            console.log("Produto excluido com sucesso!!!")
        }catch(error){
            console.log(error);          

        }
    } 


}

module.exports = new Usuario();