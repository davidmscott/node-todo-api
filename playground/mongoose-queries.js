const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

// var id = '581d77f1026dc0431641774311';

// if (!ObjectID.isValid(id)) {
// 	console.log('Id not valid');
// }

// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos', todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
// 	if (!todo) {
// 		return console.log('Id not found');
// 	}
// 	console.log('Todo By Id', todo);
// }).catch((error) => console.log(error));

User.findById('581b79ea6eada13a0e2e826d').then((user) => {
	if (!user) {
		return console.log('User not found');
	}

	console.log('User', user);
}).catch((error) => console.log(error));