var express = require('express');
var bodyParser = require('body-parser');

// ES6 destructuring
var {mongoose} = require('./db/mongoose.js');
var {ObjectID} = require('mongodb');
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

app.get('/todos', (req, res) => {
	Todo.find().then((todos) => {
		res.send({todos});
	}, (error) => {
		res.status(400).send(error);
	});
});

app.get('/todos/:id', (req, res) => {
	var id = req.params.id;
	if (!ObjectID.isValid(id)) {
		return res.status(404).send();
	}
	Todo.findById(id).then((todo) => {
		if (todo) {
			return res.send({todo});
		}
		res.status(404).send();
	}).catch((error) => res.status(400).send());
});

app.delete('/todos/:id', (req, res) => {
	var id = req.params.id;

	if (!ObjectID.isValid(id)) {
		return res.status(404).send();
	}

	Todo.findByIdAndRemove(id).then((todo) => {
		if (todo) {
			return res.send(todo);
		}
		res.status(404).send();
	}).catch((error) => res.status(400).send());
});

// app.get('/todos/:id', (req, res) => {
// 	Todo.findById(req.params).then((todo) => {
// 		res.send(todo);
// 	}, (error) => {
// 		res.status(400).send(error);
// 	});
// });

var port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log('Server running on port', port);
});

module.exports = {app};