var express = require('express')
var hbs = require('express-handlebars')
var morgan = require('morgan')

var port = process.env.PORT || 3011

var app = express()

app.use('/incl', express.static(__dirname + '/bower_components/'));
app.use('/public', express.static(__dirname + '/public/'));

app.use(morgan('dev'))

handlebars = hbs.create({
    defaultLayout: 'main',
    extname: '.html'
});

app.engine('html', handlebars.engine)
app.set('view engine', 'html');

require('./app/routes.js')(app)

app.listen(port)
