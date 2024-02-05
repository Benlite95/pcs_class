const app = require('express')();

app.get('/index.html', (req, res, next) => {
  res.end('hello express world');
});

app.get('/getData', (req, res, next) => {
  const potus = {
    first: 'Joe',
    last: 'Biden'
  };

  //res.setHeader('content-type', 'application/json');
  //res.end(JSON.stringify(potus));

  res.send(potus);
  //res.send('Hello');
});

app.get('/sayHello', (req, res, next) => {
  console.log(req.query);
  res.send(`Hello ${req.query.name}`);
});

app.param('id', (req, res, next) => {
  // look up in db by id
  const user = {
    id: req.params.id,
    first: 'Joe',
    last: 'Biden'
  };

  req.user = user;

  next();
});

app.get('/sayHello/:id', (req, res, next) => {
  /*console.log(req.params);

  // look up in db by id
  const user = {
    id: req.params.id,
    first: 'Joe',
    last: 'Biden'
  };*/

  res.send(`Hello2 ${req.user.id} ${req.user.first} ${req.user.last}`);
});

app.get('/sayGoodbye/:id', (req, res, next) => {
  /*console.log(req.params);

  // look up in db by id
  const user = {
    id: req.params.id,
    first: 'Joe',
    last: 'Biden'
  };*/

  res.send(`Goodbye ${req.user.id} ${req.user.first} ${req.user.last}`);
});

app.get('/foo/:id/:year/:month/:day', (req, res, next)=> {
  res.send(`foo report for ${req.user.id} ${req.user.first} ${req.user.last} for ${req.params.year} ${req.params.month} ${req.params.day}`);
});

app.listen(80);
