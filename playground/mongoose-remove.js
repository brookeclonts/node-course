const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectID} = require('mongodb');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '589122db7817a7c45f648e86'}).then((todo) => {
    console.log(todo);
});

Todo.findByIdAndRemove('589122db7817a7c45f648e86').then((todo) => {
    console.log(todo);
});