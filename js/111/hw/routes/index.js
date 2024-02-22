var express = require('express');
var router = express.Router();

/* GET home page. */
router.route('/')
  .get((req, res, next) => {
    const name = req.cookies.name || 'new visitor';
    res.render('index', { title: 'Express', name });
  })
  .post((req, res, next) => {
    res.cookie('name', req.body.name);
    res.redirect('/');
  });

module.exports = router;
