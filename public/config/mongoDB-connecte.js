const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected To MongoDB server');


    // db.collection('Todos').insertOne({
    // 	text: 'This is the first todo',
    // 	completed: false

    // }, (err, result)=>{
    // 	if(err){
    // 		return console.log("Unable to insert todo", err);
    // 	}
    // 	console.log(JSON.stringify(result.ops, undefined, 2));
    // })

    // db.close();

    db.collection('User').insertOne({
        name: 'Robert D Zobrist',
        age: 29,
        location: 'Scottsdale, Arizona'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to add User', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    })

    db.close();
});