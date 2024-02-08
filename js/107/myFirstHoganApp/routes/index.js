var express = require('express');
var router = express.Router();

const names = [];//'Joe', 'Kamala', 'Alajandro'];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express',
    fruits: [{name: 'apple'}, {name: 'orange'}, {name: 'pear'}],
    fruit: {name: 'peach'},
    names,
    hasNoNames: names?.length === 0
  });
});

module.exports = router;
