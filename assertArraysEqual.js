const eqArrays = require('./eqArrays');

const assertArraysEqual = (ar1, ar2) => {
  if (eqArrays(ar1, ar2))
    console.log(`✅ Assertion Passed ✅: ${ar1} === ${ar2}.`);
  else
    console.log(`${[String.fromCodePoint(0x1F631)]} Assertion Failed ${String.fromCodePoint(0x1F631)}: ${ar1} !== ${ar2}.`);
  return;
};


module.exports = assertArraysEqual;