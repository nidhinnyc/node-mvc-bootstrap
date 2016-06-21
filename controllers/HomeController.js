exports.index = function(request, response){
    response.pageTitle = "Home Controller - Index";
    response.render('home/index', response);
};
 
exports.methodone = function(request, response){
        response.pageTitle = "Home Controller - MethodOne";
    response.render('home/methodone', response);
};

exports.methodtwo = function(request, response){
    response.pageTitle = "Home Controller - MethodTwo";
    response.render('home/methodtwo', response);
};
