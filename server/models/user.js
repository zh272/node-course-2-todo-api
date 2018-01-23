var mongoose = require('mongoose');
// create a model
// User 
// email - require it - trim it - set type - set min length of 1
var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

// var newUser = new User({
//     email: '  tomhzy@gmail.com '
// });

// newUser.save().then((doc) => {
//     console.log('User saved', doc);
//     // console.log(JSON.stringify(doc, undefined, 2));
// }, (err) => {
//     console.log('Unable to save', err);
// });

module.exports = {User};