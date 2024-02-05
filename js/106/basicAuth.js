module.exports = (options) => {
  return (req, res, next) => {
    console.log(req.headers.authorization);

    if (req.headers.authorization) {
      const userNamePassword = req.headers.authorization.split(' ')[1];
      console.log(userNamePassword);

      const buffer = Buffer.from(userNamePassword, 'base64');
      console.log(buffer.toString());

      const [userName, password] = buffer.toString().split(':');
      console.log(userName, password);

      //if (userName === 'Joe' && password === 'Biden') {
      if (options.users.some(u => u.name === userName && u.password === password)) {
        return next();
      }
    }

    res.writeHead(401, {'WWW-Authenticate': 'Basic realm="PCS App"'});
    next();
  };
};
