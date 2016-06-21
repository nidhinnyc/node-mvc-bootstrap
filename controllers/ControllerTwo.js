exports.index = function(request, response){
    response.pageTitle = "Controller Two - Index";
    response.render('two/index', response);
};
 