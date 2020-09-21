const expect = require('chai').expect;
const countLetters = require('../countLetters');

describe('#countLetters', () => {
  it('should return {h: 1, i: 1} with "hi"', () => {
    let test = countLetters('hi');
    let expd = {h: 1, i: 1}
    expect(test).to.eql(expd);
  });

  it('should return {} with ""', () => {
    let test = countLetters('');
    let expd = {};
    expect(test).to.eql(expd);
  });

});


