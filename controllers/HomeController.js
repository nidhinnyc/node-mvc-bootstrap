exports.index = function(request, response){
    response.render('home/index');
};
 
exports.methodone = function(request, response){
    response.render('home/methodone');
};

exports.methodtwo = function(request, response){
    response.render('home/methodtwo');
};
