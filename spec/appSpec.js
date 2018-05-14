const request = require('supertest');
const app = require('../app');

describe('Server', () => {
    describe('Test users payload', () => {
        it('returns a JSON payload', (done) => {
            request(app)
                .get('/users')
                .expect((response)=>{
                    expect(response.text).toEqual('respond with a resource');
                })
                .expect(200, done);
        });
    });
})

