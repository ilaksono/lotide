const tail = require('../tail');
const expect = require('chai').expect;

describe('#tail', () => {
  it('should return [2,3] with [1,2,3]', () => {
    let test = tail([1,2,3]);
    let expd = [2,3];
    expect(test).to.eql(expd);
  });

  it('should return tail of loop array and results',() => {
    const expectRes = ['Lighthouse', 'Labs'];
    for (let i = 0; i < expectRes.length; i++) {
      expect(tail(['Hello', 'Lighthouse', 'Labs'])[i]).to.eql(expectRes[i]);
    }
  })
});




