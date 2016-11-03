// const MongoClient = require('mongodb').MongoClient;
// destructuring ES6 used below
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
	if (error) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	// db.collection('Todos').find({_id: new ObjectID('581a71dcbea73705d807faa2')}).toArray().then((docs) => {
	// 	console.log('Todos:');
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, (error) => {
	// 	console.log('Unable to fetch todos', error);
	// });

	// db.collection('Todos').find().count().then((count) => {
	// 	console.log(`Todos count: ${count }`);
	// }, (error) => {
	// 	console.log('Unable to fetch todos', error);
	// });

	db.collection('Users').find({name: 'Dave'}).toArray().then((docs) => {
		console.log(JSON.stringify(docs, undefined, 2));
	}, (error) => {
		console.log(error);
	});

	// db.close();
});