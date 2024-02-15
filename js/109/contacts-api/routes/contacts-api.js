const express = require('express');
const debug = require('debug')('contacts-api:contacts-api');
const pool = require('../connectionPool.js');

const router = express.Router();

router.route('/')
  .get(async (req, res, next) => {
    debug('Getting all contacts');

    try {
      const [results] = await pool.query(
        'SELECT * FROM contacts'
      );
      res.send(results);
    } catch (err) {
      return next(err);
    }
  })
  .post(async (req, res, next) => {
    debug(`adding contact ${JSON.stringify(req.body)}`);

    const { first, last, email, phone } = req.body;
    try {
      const [results] = await pool.execute(
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

router.route('/:id')
  .get(async (req, res, next) => {
    debug(`Getting contact ${req.params.id}`);

    try {
      const [results] = await pool.query(
        'SELECT * FROM contacts WHERE id = ?', [req.params.id]
      );

      if (!results.length) {
        return res.status(404)
          .send(`Unable to find contact ${req.params.id}`);
      }

      res.send(results[0]);
    } catch (err) {
      return next(err);
    }
  })
  .put(async (req, res, next) => {
    debug(`Updating contact ${req.params.id}`);

    const { first, last, email, phone } = req.body;

    try {
      const [results] = await pool.query(
        `UPDATE contacts
        SET first = ?, last = ?, email = ?, phone = ?
        WHERE id = ?`, [first, last, email, phone, req.params.id]
      );

      console.log(results);
      if (!results.affectedRows) {
        return res.status(404)
          .end(`Unable to find contact ${req.params.id}`);
      }

      res.sendStatus(204);
    } catch (err) {
      return next(err);
    }
  })
  .delete(async (req, res, next) => {
    debug(`Deleting contact ${req.params.id}`);

    try {
      const [results] = await pool.query(
        'DELETE FROM contacts WHERE id = ?', [req.params.id]
      );

      console.log(results);
      if (!results.affectedRows) {
        return res.status(404)
          .end(`Unable to find contact ${req.params.id}`);
      }

      res.sendStatus(204);

    } catch (err) {
      return next(err);
    }
  });

router.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.end(err.message || 'Internal server error...');
});

module.exports = router;
