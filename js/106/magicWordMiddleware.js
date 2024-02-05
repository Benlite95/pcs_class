module.exports = function (options) {
  return (req, res, next) => {
    console.log('In magic word middleware');
    if (req.query.magicWord === (options?.magicWord || 'please')) {
      return next();
    }
    res.end('no access allowed');
  };
};
