var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

const auth = require('./API/auth');
const get = require('./API/get');
const sign = require('./API/sign');

const bodyParser = require('body-parser');

const session = require('express-session');
const FileStore = require('session-file-store')(session);

const app = express();

app.use(cors({origin:"http://localhost:3000"}));
app.use(session({
  secret: 'some secret',  // 암호화
  resave: false,
  saveUninitialized: true,
  store: new FileStore()
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/auth', auth);
app.use('/api/get', get);
app.use('/api/sign', sign);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
