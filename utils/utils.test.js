const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
  var res = utils.add(33, 11);

  expect(res).toBe(44).toBeA('number');
});

it('should square number', () => {
  var res = utils.square(2);

  expect(res).toBe(4).toBeA('number');
});

it('should expect some values', () => {
  // expect(12).toNotBe(11);
  expect({name: 'Andrew'}).toEqual({name: 'Andrew'});
  expect({name: 'andrew'}).toNotEqual({name: 'Andrew'});

  expect([2,3,4]).toInclude(2);
  expect([2,3,4]).toExclude(1);

  expect({
    name : 'Miguel',
    age : '37',
    location: 'Boston'
  }).toInclude({
    age : '37'
  });
});

it('should verify first and last name are set', () => {

  var user = {
    location : 'Boston',
    age : '37'
  };

  var res = utils.setName(user, 'Miguel Reyes');

  expect(user).toBeA(Object).toInclude({ firstName: 'Miguel', lastName : 'Reyes'});
});
