var mongoose = require('mongoose');

// create a model
var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

// var newTodo = new Todo({
//     text: '   Something to do  '
// });

// newTodo.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (err) => {
//     console.log('Unable to save', err);
// });

module.exports = {Todo};