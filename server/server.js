var express = require('express');
var bodyParser = require('body-parser');

// ES6 destructuring
var {mongoose} = require('./db/mongoose.js');
var {User} = require('./models/user.js');
var {Todo} = require('./models/todo.js');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
	var todo = new Todo({
		text: req.body.text
	});

	todo.save().then((doc) => {
		res.send(doc);
	}, (error) => {
		res.status(400).send(error);
	});
});

var port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log('Server running on port', port);
});

module.exports = {app};