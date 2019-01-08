const rewire = require('rewire');
const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;

var app = rewire('./app');

describe('App', () => {
  var db = {
    saveUser: sinon.spy(),
    getUser: sinon.stub().returns({email : "hello@example.com", password: "1234567"})
  };
  app.__set__('db', db);

  it('should call saveUser with user Object', () => {
    var email = "miguel@example.com";
    var password = "123abc";

    let user = app.handleSignup(email, password);
    expect(db.saveUser.callCount).to.equal(1);
    expect(db.saveUser.calledWith({email, password})).to.be.true;
    expect(db.getUser.callCount).to.equal(1);
    expect(user).to.deep.equal({email : "hello@example.com", password: "1234567"});
  });

});
