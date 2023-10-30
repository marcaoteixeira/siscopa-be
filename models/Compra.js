const express = require("express");
const router = express.Router();
var knex = require("../database/conection");

class Compra {
    async findAll(){
        try{
            var result = await knex.select(['ide_compra', 'ide_usuario', 'qtd_produto', 'dat_compra', 'ind_pago', 'nom_usuario_criador', 'dat_criacao', 'nom_usuario_ultima_alteracao','dat_ultima_alteracao']).table("dbo.compra");            
            return result;
        }catch(error){
            console.log(error);
            return[];
    }

    }
    async findById(ide_usuario){                
        try{
            var result = await knex.select(['ide_compra', 'ide_usuario', 'qtd_produto', 'dat_compra', 'ind_pago', 'nom_usuario_criador', 'dat_criacao', 'nom_usuario_ultima_alteracao','dat_ultima_alteracao']).where({ide_compra:ide_compra}).table("dbo.compra");
           
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
    async CompraSave(ide_compra, ide_usuario, qtd_produto, dat_compra, ind_pago, nom_usuario_criador, dat_criacao, nom_usuario_ultima_alteracao, dat_ultima_alteracao){
        try{                       
            await knex.insert({ ide_compra, ide_usuario, qtd_produto, dat_compra, ind_pago, nom_usuario_criador, dat_criacao, nom_usuario_ultima_alteracao, dat_ultima_alteracao}).table("dbo.compra");
            console.log("compra Cadastrado com sucesso!!!")
        }catch(error){
            console.log(error);            

        }
    }  
    async CompraUpdate(ide_compra, ide_usuario, qtd_produto, dat_compra, ind_pago, nom_usuario_criador, dat_criacao, nom_usuario_ultima_alteracao, dat_ultima_alteracao){
        try{                       
            await knex.where({ide_compra: ide_compra}).update({ ide_compra, ide_usuario, qtd_produto, dat_compra, ind_pago, nom_usuario_criador, dat_criacao, nom_usuario_ultima_alteracao, dat_ultima_alteracao}).table("dbo_alinea")
            console.log("compra Alterada com sucesso com sucesso!!!")
        }catch(error){
            console.log(error);          

        }
    } 
    async Delete(ide_compra){
        try{                       
            await knex.where({ide_compra: ide_compra}).delete().table("dbo.compra")
            console.log("compra excluida com sucesso!!!")
        }catch(error){
            console.log(error);          

        }
    } 


}

module.exports = new Compra();