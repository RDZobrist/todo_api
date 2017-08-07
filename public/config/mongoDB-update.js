const { MongoClient, ObjectID } = require('mongodb');





MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
            if (err) {
                return console.log('Unable to connect to MongoDB server');
            }
            console.log('Connected To MongoDB server');
            
// find entry in User collection with a specified id, update name, and change age by inceementing by one
            db.collection('User').findOneAndUpdate({
                    _id: new ObjectID("597953765f687b1438245677")
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

            //     db.collection('Todos').findOneAndUpdate({
            //             _id: new ObjectID("59795a70e80fbc0e237e35b0")
            //         }, {
            //             $set: {
            //                 completed: true
            //             }

            //         },

            //         {
            //             returnOriginal: false
            //         }).then((result) => {
            //         console.log(result)
            //     })
            // });