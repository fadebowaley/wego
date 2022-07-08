var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* GET about. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});

/* GET services. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Express' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});

/* GET footer page. */
router.get('/footer', function(req, res, next) {
  res.render('footer', { title: 'Express' });
});

/* GET head page. */
router.get('/head', function(req, res, next) {
  res.render('head', { title: 'Express' });
});

/* GET header page. */
router.get('/header', function(req, res, next) {
  res.render('header', { title: 'Express' });
});

module.exports = router;
