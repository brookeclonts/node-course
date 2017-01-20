// used to live in server.js

var today = Date.now();

var newTodo = new Todo({
    text : 'Finish Website',
    completed: true,
    completedAt: today
});

var otherTodo = new Todo({
    text : '      Say hi       ',
});

otherTodo.save().then((doc) => {
    console.log('save todo ', doc);
}), (e) => {
    console.log('unable to save todo');
};

var newUser = new User({
    text: 'Brooke',
    email: 'brookeclonts@email.com'
});

newUser.save().then((doc) => {
    console.log('saved user', doc);
}), (e) => {
    console.log('unable to save');
};