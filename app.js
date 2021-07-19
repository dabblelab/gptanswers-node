var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var answerRouter = require('./routes/answer');

var app = express();

const rateLimit = require("express-rate-limit");
const apiLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 6
});
app.use("/answer/", apiLimiter);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/answer', answerRouter);

module.exports = app;