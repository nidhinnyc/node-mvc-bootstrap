module.exports = function(app){
    app.get('/', function(req, res){
        res.render('index')
    })
    
    app.get('/:username/:password', function(req, res){
        console.log(req.params.username)
        console.log(req.params.password)
    })
}