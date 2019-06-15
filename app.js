var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var indexRouter = require('./routes/index');
var app = express();

const uri = "mongodb+srv://fctech:PUt1L5vtaPORKZlb@cluster0-ti9h0.mongodb.net/fctech?retryWrites=true&w=majority";
const options = {
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
    poolSize: 5,
    useNewUrlParser: true
};

mongoose.connect(uri, options);
mongoose.set('useCreateIndex');

mongoose.connection.on('connected', () => {
    console.log('Conectado ao banco Atlas MongoDB.');
});

mongoose.connection.on('disconnected', () => {
    console.log('Desconectado do banco Atlas MongoDB.');
});

mongoose.connection.on('error', (err) => {
    console.log('Erro ao conectar ao banco: ' + err);
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
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