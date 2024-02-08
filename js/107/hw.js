const app = require('express')();

/*app.get('/add', (req, res, next) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  if (isNaN(a)) {
    return next(`${a} is not a valid number`);
    //throw new Error(`${a} is not a valid number`);
  }

  if (isNaN(b)) {
    return next(`${b} is not a valid number`);
    //throw new Error(`${b} is not a valid number`);
  }

  res.send(`${a + b}`);
});*/

/*app.use((req, res, next) => {
  if (isNaN(req.query.a)) {
    return next(`${req.query.a} is not a valid number`);
    //throw new Error(`${req.query.a} is not a valid number`);
  }
});*/

app.param('a', (req, res, next) => {
  const a = Number(req.params.a);
  if (isNaN(a)) {
    return next(`${a} is not a valid number`);
    //throw new Error(`${a} is not a valid number`);
  }
  req.a = a;
  next();
});

app.param('b', (req, res, next) => {
  const b = Number(req.params.b);
  if (isNaN(b)) {
    return next(`${b} is not a valid number`);
    //throw new Error(`${b} is not a valid number`);
  }
  req.b = b;
  next();
});

app.get('/add/:a/:b', (req, res, next) => {
  /*const a = Number(req.params.a);
  const b = Number(req.params.b);

  if (isNaN(a)) {
    return next(`${a} is not a valid number`);
    //throw new Error(`${a} is not a valid number`);
  }

  if (isNaN(b)) {
    return next(`${b} is not a valid number`);
    //throw new Error(`${b} is not a valid number`);
  }*/

  res.send(`${req.a + req.b}`);
});

app.get('/subtract/:a/:b', (req, res, next) => {
  /*const a = Number(req.params.a);
  const b = Number(req.params.b);

  if (isNaN(a)) {
    return next(`${a} is not a valid number`);
    //throw new Error(`${a} is not a valid number`);
  }

  if (isNaN(b)) {
    return next(`${b} is not a valid number`);
    //throw new Error(`${b} is not a valid number`);
  }*/

  res.send(`${req.a - req.b}`);
});

app.get('/:operator/:a/:b', (req, res, next) => {
  let answer = 0;
  switch (req.params.operator) {
    case '+':
      answer = req.a + req.b;
      break;
    case '-':
      answer = req.a - req.b;
      break;
    case '*':
      answer = req.a * req.b;
      break;
    case '/':
      answer = req.a / req.b;
      break;
    case '%':
      answer = req.a % req.b;
      break;
    default:
      return next(`${req.params.operator} is not a supported operator`);
  }

  res.send(`${answer}`);
});

app.use((req, res, next) => {
  const error = new Error('404, no such page :(');
  error.statusCode = 404;
  throw(error);
});

app.use((error, req, res, next) => {
  res.statusCode = error.statusCode || 500;
  res.send(`OOPS - ${error.message || error}`);
});

app.listen(80);
