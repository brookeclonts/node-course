// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// could be amazon or heroku url, or local host url
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
 if (err) {
     return console.log('Unable to connect to MongoDB server');
 }
 // find is our query. leaving it empty will query all
 // find by id
//  db.collection('Todos').find({
//      _id: new ObjectID('5877f6c50a15982cdc3cbb0d')
//  }).toArray().then((docs) => {
//      console.log('Todos');
//      console.log(JSON.stringify(docs, undefined, 2));
//  }, (err) => {
//      console.log('unable to fetch todos', err);
//  });

// find all and count them
 db.collection('Todos').find().count().then((count) => {
     console.log(`Todos count: ${count}`);
     console.log(JSON.stringify(docs, undefined, 2));
 }, (err) => {
     console.log('unable to fetch todos', err);
 });

 db.collection('Users').find({name: 'Brooke'}).count().then((count) => {
     console.log(`Todos count: ${count}`);
     console.log(JSON.stringify(docs, undefined, 2));
 }, (err) => {
     console.log('unable to fetch todos', err);
 });

//  db.close();
});