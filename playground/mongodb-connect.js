// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// can generate our own random ids for use elsewhere in the app
// var obj = new ObjectID();
// console.log(obj);

var user = {name: 'andrew', age: 25};
var {name} = user;
console.log(name);

// could be amazon or heroku url, or local host url
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
 if (err) {
     return console.log('Unable to connect to MongoDB server');
 }
 console.log('Connected to MongoDB server');

//  db.collection('Todos').insertOne({
//      text: 'Something to do',
//      completed: false
//  }, (err, result) => {
//      if(err) {
//          return console.log('Unable to insert todo', err);
//      }

//      console.log(JSON.stringify(result.ops, undefined, 2));
//  });

//  db.collection('Users').insertOne({
//      name: 'Brooke',
//      age: 25,
//      location: 'SLC'
//  }, (err, result) => {
//      if(err) {
//          return console.log('Unable to insert user', err);
//      }

//      console.log(result.ops[0]._id.getTimestamp());
//  });

 db.close();
});