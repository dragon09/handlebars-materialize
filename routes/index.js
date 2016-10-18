var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Woot woot' });
});

router.get('/about', function(req, res, next) {
  var self = {
    name: 'vic',
    cell: '123-456-7890',
    email: 'dragon09@ga.com'
  };
  //template (view)
  //object with data
  res.render('about', self);
});

router.get('/faq', function (req, res, next) {
  var questions = {
      questions = ['Can I have a cookie?'],
      anwers = ['yaas']
  };
  res.render('faq', questions);
});

router.get('/login', function(req, res, next) {
  var user = {
    var user = {
      // name: 'jim',
      password: 'banjo',
      hint: 'secret'
    }
  };
  res.render('login', user);
});

module.exports = router;
