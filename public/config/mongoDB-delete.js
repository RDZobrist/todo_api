const { MongoClient, ObjectID } = require('mongodb');





MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected To MongoDB server');


    // deleteMany
    // db.collection('Todos').deleteMany({text: "eat lunch"}).then((result)=> {
    // 	console.log(result);
    // })

    // // deleteOne 
    // db.collection('Todos').deleteOne({text: "eat lunch"}).then((result)=> {
    // 	console.log(result);
    // })

    // findOneandDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result)=> {
    // 	console.log(result);
    // })

    db.collection('User').deleteMany({name: 'Robert D Zobrist'});

    // db.collection('User').findOneAndDelete({ _id: '5979648ce80fbc0e237e3942' }).then((result) => {
        // console.log(JSON.stringify(result,undefined, 2));

    // });
});
