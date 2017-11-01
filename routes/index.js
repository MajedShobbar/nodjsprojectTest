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

router.post('/readnameandrespond', function(req, res, next) {
    res.send('Hello Majed Nodjs  Test');
});

router.get('/readnameandrespond', function(req, res, next) {
    res.send('Hello Majed Nodjs  Test');
});

module.exports = router;
