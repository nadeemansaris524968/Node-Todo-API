const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect MongoDb server.');
    }
    console.log('Connected to MongoDb server');
    const myDb = db.db('TodoApp');

    // myDb.collection('Todos').find({
    //     _id: new ObjectID('5a3418f4527c437158c1950e')
    // }).toArray().then((docs) => {
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('ERROR ', err);
    // });

    // myDb.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('ERROR ', err);
    // });

    myDb.collection('Users').find({
        name: 'Mohammed Sardar'
    }).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('ERROR ', err);
    });

    // db.close();
});