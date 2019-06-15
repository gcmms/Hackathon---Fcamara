var express = require('express');
var router = express.Router();
var Atividades = require('../models/atividades')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { titulo: 'Express' });
});



module.exports = router;
