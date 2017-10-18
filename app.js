'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const api = require('./routes')

var nunjucks = require ('nunjucks')

var flash    = require('connect-flash');
var logger      = require('morgan');
var expressSession = require('express-session');




const companyCtrl = require('./controllers/companies')

/*var users = require('./routes/users');*/

//configuracion nunjucks
nunjucks.configure('views', {
    autoescape: true,
    express: app,
    watch: true,
    noCache: false
});

app.set('view engine', 'nunjucks');
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use('/api', api)

app.use(logger('dev'));

app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(express.static("./public"));

/*var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));*/

//normal routes
app.get('/', (req, res) => {
    res.render('home.html');
});

app.get('/singup', (req, res) => {
    res.render('singup.html');
});
app.get('/groups', (req, res) => {
    res.render('newgroup.html');
});


module.exports = app