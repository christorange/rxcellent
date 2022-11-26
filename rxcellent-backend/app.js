const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongooseClient = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();
app.use(cors());

const indexRouter = require('./src/route/index');
const usersRouter = require('./src/route/UserRoute');
const itemRouter = require('./src/route/ItemRoute');
const prescriptionRouter = require('./src/route/PrescriptionRoute');
const { verifyToken } = require('./src/tools/authorization');

const { validatePrescriptionType } = require('./src/util/validation/QueryInterceptor');
const errorHandlerMiddleware = require('./src/middleware/errorHandlerMiddleware');

dotenv.config();

mongooseClient
    .connect(process.env.MONGO_URL)
    .then(() => console.log('🔑 DB Connection Successful !'))
    .catch((err) => console.log(err));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// varify token
app.use('/*', (req, res, next) => {
    verifyToken(req, res, next);
});

app.use('/items', (req, res, next) => {
    if (validatePrescriptionType(req, res)) next();
});
app.use('/items', itemRouter);
app.use('/prescriptions', prescriptionRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404));
});
app.use(errorHandlerMiddleware);

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
