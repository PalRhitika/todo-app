var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Rhitika' });// dictionary
});
router.get('/home', function(req, res, next) {
  res.render('home',{ name: "Rhitika's Homepage"});
});

module.exports = router;
