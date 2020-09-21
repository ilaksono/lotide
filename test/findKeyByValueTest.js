const findKeyByValue = require('../findKeyByValue');
const expect = require('chai').expect;

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

describe('#findKeyByValue', () => {
  it('should return drama with "The Wire"', () => {
    expect(findKeyByValue(bestTVShowsByGenre, 'The Wire')).to.eql('drama');
  });
  it('should return undefined with "That 70\'s Show"', () => {
    expect(findKeyByValue(bestTVShowsByGenre, "That 70's Show")).to.eql(undefined);
  });
});