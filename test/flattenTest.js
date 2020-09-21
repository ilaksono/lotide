const flatten = require('../flatten');
const expect = require('chai').expect;

describe('#flatten', () => {
  it('should return [1,2] with [[1,2]]', () => {
    expect(flatten([[1, 2]])).to.eql([1,2]);
  });

  it('should return [] with []', () => {
    expect(flatten([])).to.eql([]);
  });
})