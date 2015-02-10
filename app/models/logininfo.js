var mongoose = require('mongoose');

module.exports = mongoose.model('Logininfo', {
	uname : String,
	email : String,
	upsd : String
});