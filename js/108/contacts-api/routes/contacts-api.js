var express = require('express');
var router = express.Router();

router.route('/')
  .get(async (req, res, next) => {
    try {
      const [results] = await global.connection.query(
        'SELECT * FROM contacts'
      );
      res.send(results);
    } catch (err) {
      return next(err);
    }
  })
  .post(async (req, res, next) => {
    const { first, last, email, phone } = req.body;
    try {
      const [results] = await global.connection.execute(
        'INSERT INTO contacts(first, last, email, phone) VALUES(?,?,?,?)', [first, last, email, phone]
      );

      console.log(results);
      req.body.id = results.insertId;

      res.status(201)
        .location(`/contacts-api/${req.body.id}`)
        .send(req.body);
    } catch (err) {
      return next(err);
    }
  });

router.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.end(err.message || 'Internal server error...');
});

module.exports = router;
