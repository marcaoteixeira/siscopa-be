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
    async findById(id){                
        try{
            var result = await knex.select(['ide_compra', 'ide_usuario', 'qtd_produto', 'dat_compra', 'ind_pago', 'nom_usuario_criador', 'dat_criacao', 'nom_usuario_ultima_alteracao','dat_ultima_alteracao']).where({ide_compra: id}).table("dbo.compra");
           
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

    async findByIdeServidor(id){                
        try{
            //console.log('%%'+id)
            var result = await knex.select(['dbo.compra.ide_compra', 'dbo.compra.ide_usuario', 'dbo.compra.ide_produto', 'dbo.compra.qtd_produto', 'dbo.compra.dat_compra', 'dbo.compra.ind_pago', 'dbo.compra.nom_usuario_criador', 'dbo.compra.dat_criacao', 'dbo.compra.nom_usuario_ultima_alteracao','dbo.compra.dat_ultima_alteracao', 'dbo.produto.nom_produto']).table("dbo.compra").join('dbo.produto', 'dbo.produto.ide_produto', 'dbo.compra.ide_produto').orderBy('dat_compra').where({ide_usuario: id}).where({ind_pago: 0});            
            //var result = await knex.select(['ide_compra', 'ide_usuario', 'ide_produto', 'qtd_produto', 'dat_compra', 'ind_pago', 'nom_usuario_criador', 'dat_criacao', 'compra.nom_usuario_ultima_alteracao','dat_ultima_alteracao']).table("dbo.compra").where({ide_usuario: id});  
           //console.log(result)
            if(result.length > 0){
                return result;
            }else{
                return undefined;
            }                     
        }catch(error){
            console.log(error);
            return undefined;            
        }
    }

    async CompraSave( ide_usuario, ide_produto, qtd_produto, dat_compra, ind_pago, nom_usuario_criador, dat_criacao, nom_usuario_ultima_alteracao, dat_ultima_alteracao){
        try{                       
            console.log(ide_produto);
            await knex.insert({ ide_usuario, ide_produto, qtd_produto, dat_compra, ind_pago, nom_usuario_criador, dat_criacao, nom_usuario_ultima_alteracao, dat_ultima_alteracao}).table("dbo.compra");
            console.log("compra Cadastrado com sucesso!!!")
        }catch(error){
            console.log(error);            

        }
    }  
    async CompraUpdate(ide_compra, ide_usuario, qtd_produto, dat_compra, ind_pago, nom_usuario_criador, dat_criacao, nom_usuario_ultima_alteracao, dat_ultima_alteracao){
        try{                       
            await knex.where({ide_compra: ide_compra}).update({ ide_compra, ide_usuario, qtd_produto, dat_compra, ind_pago, nom_usuario_criador, dat_criacao, nom_usuario_ultima_alteracao, dat_ultima_alteracao}).table("dbo.compra")
            console.log("compra Alterada com sucesso com sucesso!!!")
        }catch(error){
            console.log(error);          

        }
    } 
    async CompraDelete(ide_compra){
        try{                       
            await knex.where({ide_compra: ide_compra}).delete().table("dbo.compra")
            console.log("compra excluida com sucesso!!!")
        }catch(error){
            console.log(error);          

        }
    } 


}

module.exports = new Compra();