const eqObjects = require('../eqObjects');
const expect = require('chai').expect;

describe('#eqObjects', () => {
  it('should return true with 2 equal objects', () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    let test = eqObjects(cd, dc)
    expect(test).to.eql(true);
  });

  it('should return false with 2 non equal objects', () => {
    const cd2 = { c: "1", d: ["2", 3, 4] };
    const cd = { c: "1", d: ["2", 3] };
    expect(eqObjects(cd, cd2)).to.eql(false);
  })

  it('should return true with 2 equal nested objects with arrays', () => {
    const obj1 = {
      a: {
        a1: [1, 2, 3],
        a2: 'hello'
      },
      b: 3,
      c: 4
    };
    const obj2 = {
      a: {
        a1: [1, 2, 3],
        a2: 'hello'
      },
      b: 3,
      c: 4
    };
    expect(eqObjects(obj1, obj2)).to.eql(true);
  });
  it('should return false with 2 non equal nested objects', () => {
    const obj1 = {
      a: {
        a1: [1, 2, 3],
        a2: 'hello'
      },
      b: 3,
      c: 4
    };
    const obj2 = {
      a: {
        a1: [1, 2, 4],
        a2: 'hello'
      },
      b: 3,
      c: 4
    };
    expect(eqObjects(obj1, obj2)).to.eql(false);
  });
});