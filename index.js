var express = require('express')
var app = express()
var port = process.env.PORT || 3011
var morgan = require('morgan')
var cookieParser = require("cookie-parser")
var session = require("express-session")

app.use(morgan('dev'))
app.use(cookieParser())
app.use(session({
    secret: 'cookie_secret',
    resave: true,
    saveUninitialized: true
}));

app.get('/', function (req, res) {
  res.send('Hello World')
  console.log(req.cookies)
  console.log(req.session)
})
 
app.listen(port)