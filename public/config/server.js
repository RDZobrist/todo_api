var mongoose = require('mongoose');
var moment = require('moment');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
        type: String
    }, completed: {
        type: Boolean
    }, completedAt: {
        type: Number
    }
});


var newTodo = new Todo ({
    text: 'Keep on keepin on' ,
    completed: false,
    completedAt: moment.now()
});

newTodo.save().then((doc)=>{
    console.log('Saved Todo', doc)
}, (e)=>{
    console.log('Unable to save todo')
});