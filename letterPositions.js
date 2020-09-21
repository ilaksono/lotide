
const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');


const letterPositions = str => {
  let res = {};
  let cpy = [...str];
  cpy.forEach((val, ind) => res[val] ? res[val].push(ind) : res[val] = [ind]);
  delete res[' '];
  return res;
};
//console.log(letterPositions('this is a string'));
console.log(letterPositions('lighthouse in the house'));

const res = letterPositions('hello');

assertArraysEqual(res.e,[1]);

module.exports = letterPositions;
