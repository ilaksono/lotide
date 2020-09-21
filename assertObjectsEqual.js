const eqObjects = require('./eqObjects');

const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  return eqObjects(actual, expected) ? console.log(`✅ Assertion Passed ✅: ${inspect(actual)} === ${inspect(expected)}`) 
  : console.log(`${String.fromCodePoint(0x1F631)} Assertion Failed ${String.fromCodePoint(0x1F631)}: ${inspect(actual)} !== ${inspect(expected)}`);
};

module.exports = assertObjectsEqual;