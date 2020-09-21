const eqObjects = require('./eqObjects');

const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  return eqObjects(actual, expected) ? console.log(`✅ Assertion Passed ✅: ${inspect(actual)} === ${inspect(expected)}`) 
  : console.log(`${String.fromCodePoint(0x1F631)} Assertion Failed ${String.fromCodePoint(0x1F631)}: ${inspect(actual)} !== ${inspect(expected)}`);
};
assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' });
//assertion passed: {a: '1', b: 2 === b: 2, a: '1'}

assertObjectsEqual({a: 1, b: 2}, {b: 1, a:2});
//asertion failed

testObj = {
  a: {
    name: 'Peter',
    val: 5
  },
  b: {
    name: 'Jim',
    val: 4
  }
}
assertObjectsEqual({
  a: {
    name: 'Peter',
    val: 5
  },
  b: {
    name: 'Jim',
    val: 4
  }
}, testObj);

module.exports = assertObjectsEqual;