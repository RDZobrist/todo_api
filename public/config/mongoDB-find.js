const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected To MongoDB server');



db.collection('User').find({name: 'Robert D Zobrist'}).count().then((count)=>{
    console.log(`User count: ${count}`)
}, (err) => {
    console.log("Unable to fetch todos", err)
})








    // searching by unique id

    // db.collection('Todos').find({
    //     _id: new ObjectID('59795a70e80fbc0e237e35b0')
    
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2))
        

   
    // }, (err) => {
    //     console.log('Unable to fetch the Todos', err);
    // });

    // close db connection
    // db.close();/



});
