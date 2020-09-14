const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅ Assertion Passed ✅: ${actual} === ${expected}`) : console.log(`${String.fromCodePoint(0x1F631)} Assertion Failed ${String.fromCodePoint(0x1F631)}: '${actual}' !== '${expected}'`);
};

const eqArrays = (arr1,arr2) => {
  let max = arr1.length;
  if (arr2.length > max)
    max = arr2.length;
  for (let i = 0; i < max; i++) {
    if (arr1[i] !== arr2[i])
      return false;
  }
  return true;
};

eqArrays(["1", "2", "3"], ["1", "2", "3"])