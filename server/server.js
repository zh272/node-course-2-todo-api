var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());


// start configure post (create new todos) routes
// create a resource ('/todos')
app.post('/todos', (req, res) => {
    // console.log(req.body);
    var todo = new Todo({
        text:req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.status(400).send(err);
    });
});

// GET /todos/123jkdfaosj

// listen on a port (local port 3000)
app.listen(3000, () => {
    console.log('Started on port 3000');
});