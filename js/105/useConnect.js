const connect = require('connect');
const app = connect();

/*app.use((req, res, next) => {
  res.write('Hello from connect');
  next();
});

app.use('/middle', (req, res, next) => {
  res.write('Im in the middle');
  next();
});

app.use((req, res, next) => {
  res.end('Goodbye from connect');
});*/

app.use((req, res, next) => {
  res.setHeader('content-type', 'text/html');
  next();
});

app.use('/index.html', (req, res, next) => {
  res.write('<h1>Welcome to PCS</h1>');
  next();
});

app.use('/aboutus.html', (req, res, next) => {
  res.write('<h2>PCS is a great place</h2>');
  next();
});

app.use((req, res, next) => {
  res.end('<h5>Copyright &copy; PCS 2024</h5>')
});

app.listen(80);
