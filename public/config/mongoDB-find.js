const { MongoClient, ObjectID } = require('mongodb');





MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected To MongoDB server');

    // db.collection('Todos').find({}).count().then((count) => {
    //     console.log(`Todos count: ${count}`);
        

    // }, (err) => {
    //     console.log('Unable to fetch the Todos', err);
    // });

    const userNameQuery = db.collection('User').find({name: "Robert D Zobrist"}).toArray().then((docs) => {
        console.log('User');
        console.log(JSON.stringify(docs, undefined, 2));
        

    }, (err) => {
        console.log('Unable to fetch the Todos', err);
    });

    // close db connection
    // db.close();
});


    // query all todos
    
    db.collection('Todos').find({_id: new ObjectID('59794fb462600e46bc662797')}).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));

    }, (err) => {
        console.log('Unable to fetch the Todos', err);
    });