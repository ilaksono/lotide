const expect = require('chai').expect;
const countOnly = require('../countOnly');
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

describe('#countOnly', () => {

  it('should return 1 with "Jason", given the firstNames', () => {
    expect(result1["Jason"]).to.eql(1);
  });

  it('should return {} with ""', () => {
    let test = countOnly([], {});
    let expd = {};
    expect(test).to.eql(expd);
  });

  it('should return undefined with "Karima", given the firstNames', () => {
    expect(result1["Karima"]).to.eql(undefined);
  });
  it('should return 2 with "Fang", given the firstNames', () => {
    expect(result1["Fang"]).to.eql(2);
  });
  it('should return undefined with "Agouhanna", given the firstNames', () => {
    expect(result1["Agouhanna"]).to.eql(undefined);
  });

});
