var express = require('express');
var router = express.Router();
const items = require('../items.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('layout', {
    title: 'Albums',
    items,
    partials: {
      content: 'index'
    }
   });
});

module.exports = router;
