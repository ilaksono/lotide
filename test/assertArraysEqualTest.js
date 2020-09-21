const assertArraysEqual = require('../assertArraysEqual')
const expect = require('chai').expect;

describe('#assertArraysEqual', () => {
  it('should return undefined with [1,2] and [1,2]', () => {
    expect(assertArraysEqual([1, 2], [1, 2])).to.equal(undefined);
  });
});