const rewire = require('rewire');
const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;

var app = rewire('./app');

describe('App', () => {
  var db = {
    saveUser: sinon.spy()
  };
  app.__set__('db', db);

  it('should call saveUser with user Object', () => {
    var email = "miguel@example.com";
    var password = "123abc";

    app.handleSignup(email, password);
    expect(db.saveUser.callCount).to.equal(1);
    expect(db.saveUser.calledWith({email, password})).to.be.true;
  });
});
