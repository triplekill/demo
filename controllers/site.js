
exports.index = function (req, res, next){
	res.render('index', { title: 'Express',message: req.flash('info') });
	
	//��¼ʧ��req.flash('info','�˻����������');
	// req.redercit('/');
}
