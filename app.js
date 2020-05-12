var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

app.engine('ejs', require('ejs-mate'));
app.locals._layoutFile = 'layout';
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*    登录拦截器   */
app.use(function (req, res, next) {
  var url = req.originalUrl;

  var userCookies=req.cookies.uid; 
  if(userCookies==undefined){
    if( url.indexOf('/login?')<= -1 && url!='/login'){
      return res.redirect('/login');//页面重定向；
    }
  }
  next();
});

app.use('/', require('./routes/personal/index'));
app.use('/project', require('./routes/project/index'));
app.use('/order', require('./routes/personal/order'));
app.use('/money', require('./routes/personal/money'));
app.use('/means', require('./routes/personal/means'));

//常用功能
app.use('/CommonProblem', require('./routes/CommonProblem/index'));

//招阶段路由
app.use('/pdm', require('./routes/pdm/index'));


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
