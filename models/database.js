var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/scan');
exports.mongoose = mongoose;