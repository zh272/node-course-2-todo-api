// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // object destructuring


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=> {
    if (err) {
        // use return to prevent following code from executing.
        return console.log('Unable to connect to MongoDB server');
    };

    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result)=> {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     };
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // Insert new doc into User (name, age, location)
    db.collection('User').insertOne({
        // _id: 123,
        name: 'Jeremy',
        age: 25,
        location: 'Ithaca'
    }, (err, result)=> {
        if (err) {
            return console.log('Unable to insert user', err);
        };
        // console.log(JSON.stringify(result.ops, undefined, 2));
        console.log(result.ops[0]._id.getTimestamp());
    });

    db.close();
});