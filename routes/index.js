var express = require('express');
var router = express.Router();
var Atividades = require('../models/atividades')

/* GET home page. */
router.get('/', function(req, res, next) {
<<<<<<< HEAD
    res.render('index')
});

=======
  res.render('index', { titulo: 'Express' });
});


>>>>>>> parent of 282530b... Merge branch 'master' of https://github.com/gcmms/fcamara

module.exports = router;
