// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// could be amazon or heroku url, or local host url
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
 if (err) {
     return console.log('Unable to connect to MongoDB server');
 }

 // delete many
 db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
     console.log(result);
 })

 // delete one - deletes only the first item it finds
 db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
     console.log(result);
 })

 // find one and delete
 db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
     console.log(result);
 });

//  db.close();
});