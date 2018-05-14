const request = require('supertest');
const app = require('../app');

describe('Server', () => {
    describe('Test users payload', () => {
        it('returns a JSON payload', (done) => {
            request(app)
                .get('/users')
                .then(response => {
                    expect(200);
                    expect(response.text).toEqual('respond with a resource');
                    done();
                })
                .catch(error => {
                    throw(error);
                })
            ;
        });
    });
})

