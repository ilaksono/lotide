const eqArrays = require('../eqArrays');
const expect = require('chai').expect;

describe('#eqArray', () => {
  it('should return true when given 2 equal 1D arrays', () => {
    test = eqArrays([1,2,3],[1,2,3]);
    expect(test).to.eql(true);
  });

  it('should return true when given 2 equal (2+)D arrays', () => {
    test = eqArrays([1,[[[2]],3]],[1,[[[2]],3]]);
    expect(test).to.eql(true);
  });

  it('should return false when given 2 not equal 1D arrays', () => {
    test = eqArrays([1,2,3],[1,2,3, 4]);
    expect(test).to.eql(false);
  });
  it('should return false when given 2 not equal (2+)D arrays', () => {
    test = eqArrays([[[1]]],[[[2]]]);
    expect(test).to.eql(false);
  });
  
  it('should return [1,2,3],[1,2,3] with [1,2,3],[1,2,3] / should not mutate original arrays', () => {
    let args1 = [1,2,3];
    let args2 = [1,2,3];
    eqArrays([args1], [args2]);
    expect([args1, args2]).to.eql([[1,2,3],[1,2,3]]);
  });
});