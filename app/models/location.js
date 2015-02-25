var mongoose = require('mongoose');

module.exports = mongoose.model('Pin', {
	uname : String,
	pinname : String,
	lat : String,
	lng : String
});