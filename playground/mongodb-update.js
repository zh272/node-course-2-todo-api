// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // object destructuring


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=> {
    if (err) {
        // use return to prevent following code from executing.
        return console.log('Unable to connect to MongoDB server');
    };

    console.log('Connected to MongoDB server');
    
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5a663f21261e3b8c33236278')
    // }, {
    //     $set: { // update operators
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result)
    // });

    db.collection('User').findOneAndUpdate({
        _id: new ObjectID('5a655167008b23060c3c4822')
    }, {
        $set: { // update operators
            name: 'Jeremy'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    // db.close();
});