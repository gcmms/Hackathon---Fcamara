var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index')
});

router.post('/', function(req, res) {
    var course = {
        name: req.body.name,
        category: req.body.category
    };
    postCourses(course, function() {
        getCourses(res);
    });
});



module.exports = router;