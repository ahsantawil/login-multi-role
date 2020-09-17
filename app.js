var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// body parser midleware
const bodyParser  = require('body-parser'); 

// router admin
const adminRouter = require('./routes/admin');

var app = express();


// import mysql database
const mysql = require('mysql');
const con  = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : '',
  database : 'afs-sanxing'
});

// connect database 
// con.connect((err)=> {
//   if(err) throw err;
//   console.log('Mysql Connected');
// });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// import template
app.use('/admin-template', express.static(path.join(__dirname, 'public/assets')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
// admin
app.use('/admin', adminRouter);

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
