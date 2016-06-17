var express = require('express')
var hbs = require('express-handlebars')
var morgan = require('morgan')

var port = process.env.PORT || 3011

var app = express()

app.use('/bwr', express.static(__dirname + '/public/bower_components/'));
app.use('/dist', express.static(__dirname + '/public/dist/'));
app.use('/js', express.static(__dirname + '/public/js/'));
app.use('/less', express.static(__dirname + '/public/less/'));
app.use(morgan('dev'))

handlebars = hbs.create({
    defaultLayout: 'main',
    extname: '.html'
});

app.engine('html', handlebars.engine)
app.set('view engine', 'html');

require('./app/routes.js')(app)
 
app.listen(port)