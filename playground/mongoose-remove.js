const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

// Todo.remove({}).then((result) => {
// 	console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.findOneAndRemove({_id: '5820d667b10ee17e3a6f1281'}).then((todo) => {
// 	console.log(todo);
// });

Todo.findByIdAndRemove('5820d667b10ee17e3a6f1281').then((todo) => {
	console.log(todo);
});