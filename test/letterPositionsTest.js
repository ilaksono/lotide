const letterPositions = require('../letterPositions');
const expect = require('chai').expect;

describe('#letterPositions', () => {
  it('should return correct indices of input string', () => {
    test = letterPositions("lighthouse in the house");
    expect(test).to.eql({ 
      l: [0],
      i: [1, 11],
      g: [2],
      h: [3, 5, 15, 18],
      t: [4, 14],
      o: [6, 19],
      u: [7, 20],
      s: [8, 21],
      e: [9, 16, 22],
      n: [12]
    });
  });
});