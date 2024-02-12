var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    const [results] = await global.connection.query(
      'SELECT * FROM contacts'
    );
    res.render('layout', {
      title: 'Contacts',
      partials: {
        content: 'index'
      },
      contacts: results,
      noContacts: results?.length === 0
    });
  } catch (err) {
    return next(err);
  }
});

router.route('/add')
  .get((req, res, next) => {
    res.render('layout', {
      title: 'Add Contact',
      partials: {
        content: 'contactForm'
      }
    });
  })
  .post(async (req, res, next) => {
    const { first, last, email, phone } = req.body;
    try {
      const [results] = await global.connection.execute(
        'INSERT INTO contacts(first, last, email, phone) VALUES(?,?,?,?)', [first, last, email, phone]
      );

      console.log(results);

      res.writeHead(301, { 'location': '/' });
      res.end();
    } catch (err) {
      return next(err);
    }
  });

router.param('id', async (req, res, next) => {
  try {
    const [results] = await global.connection.execute(
      'SELECT * FROM contacts WHERE id = ?', [Number(req.params.id)]
    );

    console.log(results);

    if (!results.length) {
      return next(new Error(`Unable to find contact ${req.params.id}`));
    }

    req.contact = results[0];
    next();
  } catch (err) {
    return next(err);
  }
});

router.route('/edit/:id')
  .get((req, res, next) => {
    res.render('layout', {
      title: 'Edit Contact',
      partials: {
        content: 'contactForm'
      },
      contact: req.contact
    });
  })
  .post(async (req, res, next) => {
    const { first, last, email, phone } = req.body;
    try {
      const [results] = await global.connection.execute(
        'UPDATE contacts SET first = ?, last = ?, email = ?, phone = ? WHERE id = ? ', [first, last, email, phone, req.params.id]
      );

      if (!results.changedRows) {
        return next(new Error(`Unable to find contact ${req.params.id}`));
      }

      res.writeHead(301, { 'location': '/' });
      res.end();
    } catch (err) {
      return next(err);
    }
  });

/*router.post...*/
router.get('/delete/:id', async (req, res, next) => {
  try {
    const [results] = await global.connection.execute(
      'DELETE FROM contacts WHERE id = ? ', [req.params.id]
    );

    console.log(results);

    if (!results.affectedRows) {
      return next(new Error(`Unable to find contact ${req.params.id}`));
    }

    res.writeHead(301, { 'location': '/' });
    res.end();
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
