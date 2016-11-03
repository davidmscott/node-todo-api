// const MongoClient = require('mongodb').MongoClient;
// destructuring ES6 used below
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// destructuring example below, available in ES6
// var user = {name: 'Dave', age: 35};

// var {name} = user;

// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
	if (error) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	// db.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed: false
	// }, (error, result) => {
	// 	if (error) {
	// 		return console.log('Unable to insert todo', error);
	// 	}
	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });

	db.collection('Users').insertOne({
		name: 'Dave',
		age: 35,
		location: 'Boulder'
	}, (error, result) => {
		if (error) {
			return console.log('Unable to insert user', error);
		}
		// console.log(JSON.stringify(result.ops, undefined, 2));
		console.log(result.ops[0]._id.getTimestamp());
	});

	db.close();
});
