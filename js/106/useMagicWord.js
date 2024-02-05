const app = require('express')();

app.get('/index.html', (req, res, next) => {
  res.end('This is the index page');
});

app.get('/about.html', (req, res, next) => {
  res.end('This is the about page');
});

/*app.use((req, res, next) => {
  console.log('In magic word middleware');
  if (req.query.magicWord === 'please') {
    return next();
  }
  res.end('no access allowed');
});*/

//app.use(require('./magicWordMiddleware.js')());//{magicWord: 'foo'}));
app.use(require('./basicAuth')({users: [
  { name: 'Joe', password: 'Biden'}, {name: 'Donald', password: 'MAGA'}
]}));

app.get('/admin.html', (req, res, next) => {
  res.end('This is the admin page');
});

app.listen(process.argv[2]);
