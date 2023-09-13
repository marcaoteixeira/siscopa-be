const express = require("express");
const router = express.Router();
var knex = require("../../database/conection");

class Usuario {
    async findAll(){
        try{
            var result = await knex.select([ide_usuario, nom_usuario, tex_login, ind_bloqueado, nom_usuario_criador, dat_criacao, nom_usuario_ultima_alteracao,  dat_ultima_alteracao, num_telefone]).table("dbo.compra");            
            return result;
        }catch(error){
            console.log(err);
            return[];
    }

    }
    async findById(id){                
        try{
            var result = await knex.select([ide_usuario, nom_usuario, tex_login, ind_bloqueado, nom_usuario_criador, dat_criacao, nom_usuario_ultima_alteracao,  dat_ultima_alteracao, num_telefone]).where({id:id}).table("dbo.usuraio");
           
            if(result.length > 0){
                return result[0];
            }else{
                return undefined;
            }                     
        }catch(error){
            console.log(err);
            return undefined;            
        }
    }
    async UsuarioSave(nom_usuario, tex_login, ind_bloqueado, nom_usuario_criador, dat_criacao, nom_usuario_ultima_alteracao,  dat_ultima_alteracao, num_telefone){
        try{                       
            await knex.insert({ide_usuario, nom_usuario, tex_login, ind_bloqueado, nom_usuario_criador, dat_criacao, nom_usuario_ultima_alteracao,  dat_ultima_alteracao, num_telefone}).table("dbo.usuario");
            console.log("Cadastro com sucesso!!!")
        }catch(error){
            console.log(error);            

        }
    }  
    async UsuarioUpdate(ide_usuario, nom_usuario, tex_login, ind_bloqueado, nom_usuario_criador, dat_criacao, nom_usuario_ultima_alteracao,  dat_ultima_alteracao, num_telefone){
        try{                       
            await knex.where({ide_usuario: ide_usuario}).update({ nom_usuario, tex_login, ind_bloqueado, nom_usuario_criador, dat_criacao, nom_usuario_ultima_alteracao,  dat_ultima_alteracao, num_telefone}).table("tab_alinea")
            console.log("Alterado com sucesso com sucesso!!!")
        }catch(error){
            console.log(error);          

        }
    } 
    async UsuarioDelete(ide_usuario){
        try{                       
            await knex.where({ide_usuario: ide_usuario}).delete().table("tab_usuario")
            console.log("Usuário excluido com sucesso!!!")         

        }catch(error){
            console.log(error);            

        }
    } 


}

module.exports = new Usuario();