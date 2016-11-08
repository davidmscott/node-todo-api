var mongoose = require('mongoose');

var dbUrl = process.env.MONGODB_URI;

mongoose.Promise = global.Promise; //set up mongoose to use promises instead of default callbacks
mongoose.connect(dbUrl);

module.exports = {mongoose};
