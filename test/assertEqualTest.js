const assertEqual = require('../assertEqual');
const expect = require('chai').expect;

describe('#assertEqual', () => {
  it('should return undefined with any arguments', () => {
    expect(assertEqual('milk', 'milk')).to.equal(undefined);
  });
});