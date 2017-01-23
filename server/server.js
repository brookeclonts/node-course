// package installs
var express = require('express');
var bodyParser = require('body-parser');

// create local variable from mongoose config
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

let port = 3000;

var app = express();

// sends json from response to express app
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        console.log(todos);
        res.status(200).send({todos});
    }, (e) => {
        res.status(400).send(e);
    });
});

app.post('/users', (req, res) => {
    var user = new User({
        email: req.body.email
    });

    user.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(200).send(e);
    });
});

app.listen(port, () => {
    console.log(`started on port ${port}`);
});

module.exports = {app};





