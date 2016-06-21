var HomeController = require('../controllers/HomeController');
var ControllerTwo = require('../controllers/ControllerTwo');

module.exports = function(app){
    app.get('/', HomeController.index);
    app.get('/home/index', HomeController.index);
    app.get('/home/methodone', HomeController.methodone);
    app.get('/home/methodtwo', HomeController.methodtwo);
    app.get('/two/index', ControllerTwo.index);
}