// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // object destructuring


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=> {
    if (err) {
        // use return to prevent following code from executing.
        return console.log('Unable to connect to MongoDB server');
    };

    console.log('Connected to MongoDB server');
    
    // db.collection('Todos').find({
    //     _id: new ObjectID('5a65508087cdf20609212ed9')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('User').find({name: 'Jeremy'}).toArray().then((docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    // db.close();
});