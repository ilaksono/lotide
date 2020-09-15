const eqArrays = (arr1,arr2) => {
  let max = -1;
  arr2.length > arr1.length ? max = arr2.length : max = arr1.length;
  if (arr2.length > max)
    max = arr2.length;
  for (let i = 0; i < max; i++) {
    if (arr1[i] !== arr2[i])
      return false;
  }
  if (max === -1)
    return false;
  return true;
};

const assertArraysEqual = (ar1, ar2) => {
  if (eqArrays(ar1, ar2))
    console.log(`✅ Assertion Passed ✅: ${ar1} === ${ar2}.`);
  else
    console.log(`${String.fromCodePoint(0x1F631)} Assertion Failed ${String.fromCodePoint(0x1F631)}: ${ar1} !== ${ar2}.`);
  return;
};

const without = (srcA, rmA) => {
  let cpy = [...srcA];
  for (let i = 0; i < rmA.length; i++) {
    for (let j = 0; j < cpy.length; j++) {
      if (cpy[j] === rmA[i]) {
        cpy.splice(j, 1);
        i--;
      }
    }
  }
  return cpy;
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);