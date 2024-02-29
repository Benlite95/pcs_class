var express = require('express');
var router = express.Router();
const items = require('../items.js');
const Cart = require('../cart.js');

/* GET home page. */
router.route('/')
  .get(function(req, res, next) {
    console.log('get - cart has', req.session.cart);

    res.render('layout', {
      title: 'Albums',
      items,
      partials: {
        content: 'index'
      }
    });
  })
  .post((req, res, next) => {
    const cart = new Cart(req.session.cart?.items);
    console.log('in post cart is', cart);
    req.session.cart = cart;
    cart.addItem(req.body.id, req.body.quantity);

    res.redirect('/');
  });

router.get('/viewCart', (req, res, next) => {
  res.render('layout', {
    items: JSON.stringify(req.session.cart?.items),
    partials: {
      content: 'viewCart'
    }
  })
});

module.exports = router;
