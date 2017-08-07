const { MongoClient, ObjectID } = require('mongodb');





MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
            if (err) {
                return console.log('Unable to connect to MongoDB server');
            }
            console.log('Connected To MongoDB server');

// find entry in User collection with a specified id, update name, and change age by incrementing by one
            db.collection('User').findOneAndUpdate({
                    _id: new ObjectID("5987e6058628f5245424318d")
                }, {
                    $set: {
                        name: "Robert D Zobrist"
                    },
                    $inc: {
                        age: 1

                    }

                },

                {
                    returnOriginal: false
                }).then((result) => {
                console.log(result)
            })

});

            