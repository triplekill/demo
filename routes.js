var site = require('./controllers/site.js');

module.exports = function (app){

	app.get('/', site.index);
//	app.get('/users', user.list);
}