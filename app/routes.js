var HomeController = require('./controllers/HomeController');

module.exports = function(app){
    app.get('/', HomeController.index);
    app.get('/methodone', HomeController.methodone);
    app.get('/methodone', HomeController.methodtwo);
}