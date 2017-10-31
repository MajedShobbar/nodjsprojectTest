var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/doit', function(req, res, next) {
    res.render('doit', { title: 'Express Express' });
});

router.get('/welcome', function(req, res, next) {
    res.render('come1', { title: 'Majed Shobbar' });
});

module.exports = router;
