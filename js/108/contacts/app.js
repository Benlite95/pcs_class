var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.set('etag', false);
app.use((req, res, next) => {
  //res.setHeader('maxAge: 0');
  //res.setHeader('cache-control', 'no-store');

  res.setHeader("Surrogate-Control", "no-store");
  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
  res.setHeader("Expires", "0");

  next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('layout', {
    title: 'Contacts',
    partials: {
      content: 'error'
    }
  });
});

app.locals.appTitle = 'PCS Contacts App';

const mysql = require('mysql2/promise');
(async () => {
  // temp - make connection global
  global.connection = await mysql.createConnection({
    host: 'localhost',
    user: 'nodeuser5',
    password: 'test123',
    database: 'nodeuser5'
  });
})();

module.exports = app;
