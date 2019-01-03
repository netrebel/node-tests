const chai = require('chai');
const expect = chai.expect;

const utils = require('./utils');

describe('Utils', () => {

  describe('#add', () => {
    it('should add two numbers', () => {
      var res = utils.add(33, 11);

      expect(res).to.be.a('number');
      expect(res).to.equal(44);
    });

    it('should asyncAdd two numbers', (done) => {
      utils.asyncAdd(4, 3, (sum) => {
        expect(sum).to.equal(7);
        expect(sum).to.be.a('number');
        done();
      });
    });
  });

  it('should square number', () => {
    var res = utils.square(2);

    expect(res).to.equal(4);
    expect(res).to.be.a('number');
  });

  it('should expect some values', () => {
    // expect(12).toNotBe(11);
    expect({ name: 'Andrew' }).to.have.property('name', 'Andrew');
    expect({ name: 'andrew' }).to.not.have.property('name', 'Andrew');

    expect([2, 3, 4]).to.include(2);
    expect([2, 3, 4]).to.not.include(1);

    expect({
      name: 'Miguel',
      age: '37',
      location: 'Boston'
    }).to.have.property('age', '37');
  });

  it('should verify first and last name are set', () => {

    var user = {
      location: 'Boston',
      age: '37'
    };
    var res = utils.setName(user, 'Miguel Reyes');

    expect(res).to.be.a('Object');
    expect(res).to.have.property('firstName', 'Miguel');
  });
});
