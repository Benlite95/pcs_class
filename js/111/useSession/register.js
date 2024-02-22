const pool = require('./connectionPool.js');
const bcrypt = require('bcrypt');

module.exports = async (req, res, next) => {
  try {
    const hash = await bcrypt.hash(req.body.password, 10);
    const [results] = await pool.query(
      'INSERT INTO users(username, password) VALUES(?,?)', [req.body.username, hash]
    );

    console.log(results);

    res.redirect('/');
  } catch (err) {
    console.log(err);

    if (err.errno === 1062) {
        return next(new Error(`${req.body.username} is already taken. Please try a different name`));
    }

    return next(err);
  }
};
