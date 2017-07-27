const {MongoClient, ObjectID} = require('mongodb');





MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected To MongoDB server');

    db.collection('Todos').findOneAndUpdate({
    	_id: new ObjectID("59795a70e80fbc0e237e35b0")
    }, 
     {
    	$set: {
    		completed: true
    	}

    },

    {
    		returnOriginal: false
    	}).then((result)=>{
    	console.log(result)
    })
    });