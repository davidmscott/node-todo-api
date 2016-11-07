var mongoose = require('mongoose');

var dbUrl = process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp';

mongoose.Promise = global.Promise; //set up mongoose to use promises instead of default callbacks
mongoose.connect(dbUrl);

module.exports = {mongoose};

