const pool = require('./connectionPool.js');
const bcrypt = require('bcrypt');

module.exports = async (req, res, next) => {
  try {
    const [results] = await pool.query(
      'SELECT password FROM users WHERE username = ?', [req.body.username]
    );
    if (!results) {
      next(new Error('Bad username and/or password'));
    }

    if (!await bcrypt.compare(req.body.password, results[0].password)) {
      next(new Error('Bad username and/or password'));
    }

    req.session.username = req.body.username;
    return res.redirect('/admin');
  } catch (err) {
    return next(err);
  }
};
