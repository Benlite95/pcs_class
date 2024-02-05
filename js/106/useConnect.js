//const connect = require('connect');
//const app = connect();
const app = require('connect')();

/*app.use((req, res, next) => {
  const now = new Date();
  console.log(`${now.toLocaleDateString()} ${now.toLocaleTimeString()} - ${req.url}`);
  next();
});*/

app.use(require('./logger.js'));

app.use((req, res, next) => {
  res.setHeader('content-type', 'text/html');
  next();
});

app.use('/index.html', (req, res, next) => {
  res.end('<div>I am the index page</div>');
});

app.use('/aboutus.html', (req, res, next) => {
  res.end('<div>I am the about us</div>');
});

app.use('/makeError', (req, res, next) => {
  foo();
});

/*app.use((req, res, next) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  req.searchParams = url.searchParams;
  next();
});*/
//const queryParser = require('./queryParser.js');
//app.use(queryParser);
app.use(require('./queryParser.js'));

app.use('/sayHello', (req, res, next) => {
  //const url = new URL(req.url, `http://${req.headers.host}`);
  //console.log(url.searchParams);
  res.end(`<h3>Hello ${/*url*/req.searchParams.get('name')}</h3>`);
});

app.use('/sayGoodbye', (req, res, next) => {
  //const url = new URL(req.url, `http://${req.headers.host}`);
  //console.log(url.searchParams);
  res.end(`<h3>Goodbye ${/*url*/req.searchParams.get('name')}</h3>`);
});

app.use((req, res, next) => {
  //res.statusCode = 404;
  //res.end('<h2>404. Page not found</h2>');
  const error = new Error('404. Page not found');
  error.statusCode = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.statusCode = error.statusCode || 500;
  res.write(`<h2>OOPS something went wrong ${error.message}`);

  next(error);
  //next();
});

app.use((error, req, res, next) => {
  res.end('<h3>error end</h3>');
});

app.use((req, res, next) => {
  res.end('end of file');
});

app.listen(80);
