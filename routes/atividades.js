var express = require('express');
var router = express.Router();
const mongoose = require('mongoose')
require('../models/atividades')
const Atividade = mongoose.model('atividades')

/* GET home page. */

router.get('/', function(req, res, next) {

    Atividade.find().then((atividades) =>{
        res.render('index', {atividades: atividades})
    
    }).catch((err)=>{
        req.flash('msg_erro', 'Houve algum erro.')
        res.render('index')
    })
  });

  router.get('/new', function(req,res, next){
      res.render('new')
  })

  router.post('/new', function(req, res, next) {

    var novaAtividade = {
      nome: req.body.nome,
      descricao: req.body.descricao,
      hr_inicio: req.body.hr_inicio,
      hr_fim: req.body.hr_fim,
      limite: req.body.limite
    }

    new Atividade(novaAtividade).save().then(()=>{
        console.log('succ')
        req.flash('msg_sucesso', 'Cadastrado com sucesso.')
    }).catch((err) => {
        console.log(err)
        req.flash('msg_erro', 'Houve algum erro.')
    })

  });

  router.get('/edit/:id', function(req, res, next) {
      Atividade.findOne({_id: req.params._id}).then((atividade) =>{
            res.render("edit")
      }).catch((err) =>{
            req.flash('msg_erro', 'Atividade não encontrada')
            res.redirect('/index')
      })
    
  });
  
  router.post('/edit', function(req, res, next) {
    Atividade.findOne({_id:req.params.id}).then((atividade) => {
        atividade.nome = req.body.nome,
        atividade.descricao = req.body.descricao,
        atividade.hr_inicio = req.body.hr_inicio,
        atividade.hr_fim = req.body.hr_fim,
        atividade.limite = req.body.limite
        
        atividade.save().then(() =>{
            req.flash('msg_sucesso', 'Editado com sucesso.')
            res.redirect('/index')
        })

    }).catch((err) =>{
        req.flash('msg_erro', 'Não foi possível atualizar a atividade.')
        res.redirect('/index')
    })
  });

 
  router.get('/delete', function(req, res, next) {
        Atividade.remove({_id: req.body._id}).then(()=>{
            req.flash('msg_sucesso', 'Atividade excluída com sucesso.')
            res.redirect('/index')
        }).catch((err) =>{
            req.flash('msg_erro', 'Não foi possível atualizar a atividade.')
        res.redirect('/index')
        })
        
  });

  router.get('/delete/:id', function(req, res, next) {
    res.render('index');
  });



module.exports = router;
