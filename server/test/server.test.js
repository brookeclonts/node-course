const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');
const {User} = require('./../models/user');

// clears db so assumptions made below are accurate
beforeEach((done) => {
    Todo.remove({}).then(() => done());
});

beforeEach((done) => {
    User.remove({}).then(() => done());
});

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

                Todo.find().then((todos) => {
                    expect(todos.length).toBe(1);
                    expect(todos[0].text).toBe(text);
                    done();
                }).catch((e) => done(e));
            });
    });
});

describe('POST /users', () => {
    it('should create a new user', (done) => {
        var email = 'email@email.com';

        request(app)
            .post('/users')
            .send({email})
            .expect(200)
            .expect((res)=> {
                expect(res.body.email).toBe(email);
            })
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

                User.find().then((users) => {
                    expect(users.length).toBe(1);
                    expect(users[0].email).toBe(email);
                    done();
                }).catch((e) => done(e));
            });
    });
});