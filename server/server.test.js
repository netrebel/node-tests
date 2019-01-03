const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;

var app = require('./server').app;

describe('Server', () => {

  describe('GET /', () => {
    it('should return 404 response', (done) => {
      request(app)
        .get('/')
        .end(function (err, res) {
          expect(res.statusCode).to.equal(404);
          expect(res.body).to.include({
            error: 'Page not found.'
          });
          done();
        });
    });
  });

  describe('GET /users', () => {
    it('should my user object', (done) => {
      request(app)
        .get('/users')
        .end(function (err, res) {
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.be.an('array');
          expect(res.body).to.have.lengthOf(2);
          expect(res.body[0]).to.include({
            name: 'Miguel',
            age: 37
          });
          done();
        });
    });
  });
});
