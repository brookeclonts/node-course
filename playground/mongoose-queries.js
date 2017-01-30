const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectID} = require('mongodb');

// var id = '58869285af8cae0724422cef';

// if (!ObjectID.isValid(id)) {
//     console.log('Id not valid.');
// }
//gives you back an array of objects
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// // gives you back a document rather than an array
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo by Id', todo);
// }).catch((e) => {
//     console.log(e);
// });

var id = '58868f25125feb7722129793';

User.findById(id).then((user) => {
    if (!user) {
        return console.log('Id not found');
    }
    console.log('Todo by Id', user);
}).catch((e) => {
    console.log(e);
});