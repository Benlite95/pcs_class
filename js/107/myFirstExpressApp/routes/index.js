var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.locals.bar = 'Bar';
  res.render('index', { title: 'Express', foo: 5 });
});

router.get('/foo', function (req, res, next) {
  res.send('index FOO!!!');
});

module.exports = router;
