
exports.index = function (req, res, next){
	res.render('index', { title: 'Express',message: req.flash('info') });
	
	//µÇÂ¼Ê§°Üreq.flash('info','ÕË»§»òÃÜÂë´íÎó');
	// req.redercit('/');
}
