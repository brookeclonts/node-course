const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');
const {User} = require('./../models/user');
const {ObjectID} = require('mongodb');

const todos = [{
    text: 'first test todo',
    _id: new ObjectID()
}, {
    text: 'second test todo',
    _id: new ObjectID()
}];

beforeEach((done) => {
    Todo.remove({}).then(() => {
        Todo.insertMany(todos);
    }).then(() => done());
});

// const users = [{
//     email: 'email1@email.com'
// }, {
//     email: 'email2@email.com'
// }];

// beforeEach((done) => {
//     User.remove({}).then(() => {
//         User.insertMany(users);
//     }).then(() => done());
// });

// clears db so assumptions made below are accurate
// beforeEach((done) => {
//     Todo.remove({}).then(() => done());
// });

// beforeEach((done) => {
//     User.remove({}).then(() => done());
// });

describe('POST /todos', () => {
    it('should create a new todo', (done) => {
        var text = 'test to do text';

        request(app)
            .post('/todos')
            .send({text})
            .expect(200)
            .expect((res)=> {
                expect(res.body.text).toBe(text);
            })
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

                Todo.find({text}).then((todos) => {
                    expect(todos.length).toBe(1);
                    expect(todos[0].text).toBe(text);
                    done();
                }).catch((e) => done(e));
            });
    });
});

describe('GET todos', () => {
    it('should get all todos', (done) => {
        request(app)
            .get('/todos')
            .expect(200)
            .expect((res) => {
                expect(res.body.todos.length).toBe(2);
            })
            .end(done);
    });
})

describe('GET /todos/:id', () => {
    it('should return todo doc', (done) => {
        request(app)
            .get(`/todos/${todos[0]._id.toHexString()}`)
            .expect(200)
            .expect((res) => {
                let txt = res.body.todo[0].text
                expect(txt).toBe(todos[0].text);
            })
            .end(done);
    });

    it('should return a 404 if not found', (done) => {
        let id = new ObjectID().toHexString();
        console.log(id);
        request(app)
            .get(`/todos/${id}`)
            .expect(404)
            .end(done);
    });

    it('should return a 404 if not valid', (done) => {
        request(app)
            .get(`/todos/222`)
            .expect(404)
            .end(done);
    });
})

// describe('POST /users', () => {
//     it('should create a new user', (done) => {
//         var email = 'email@email.com';

//         request(app)
//             .post('/users')
//             .send({email})
//             .expect(200)
//             .expect((res) => {
//                 expect(res.body.email).toBe(email);
//             })
//             .end((err, res) => {
//                 if (err) {
//                     return done(err);
//                 }

//                 User.find().then((users) => {
//                     expect(users.length).toBe(3);
//                     expect(users[0].email).toBe(email);
//                     done();
//                 }).catch((e) => done(e));
//             });
//     });
// });