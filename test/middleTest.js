const middle = require('../middle');
const expect = require('chai').expect;

describe('#middle', () => {

  it('should return [2] with [1,2,3]', () => {
    test = middle([1, 2, 3]);
    expect(test).to.eql([2]);
  });

  it('should return [] with [1]', () => {
    test = middle([1]);
    expect(test).to.eql([]);
  });

  it('should return [3,4] with [1,2,3,4,5,6]', () => {
    test = middle([1, 2, 3, 4, 5, 6]);
    expect(test).to.eql([3, 4]);
  });

  it('should return [] with [1,2]', () => {
    test = middle([1, 2]);
    expect(test).to.eql([]);
  });
});