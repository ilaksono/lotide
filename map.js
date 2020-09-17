const map = function(arr, func) {
  let res = [];
  for (let a of arr)
    res.push(func(a));
  return res;
};
const eqArrays = (arr1, arr2) => {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i])
        return false;
    }
  } else
    return false;
  return true;
};

const assertArraysEqual = (ar1, ar2) => {
  if (eqArrays(ar1, ar2))
    console.log(`✅ Assertion Passed ✅: ${ar1} === ${ar2}.`);
  else
    console.log(`${[String.fromCodePoint(0x1F631)]} Assertion Failed ${String.fromCodePoint(0x1F631)}: ${ar1} !== ${ar2}.`);
  return;
};

const words = ["ground", "control", "to", "major", "tom"];
let test1 = map(words, word => word[0]);
assertArraysEqual(test1, ['g', 'c', 't', 'm', 't']);

let test2 = map(words, word => word + 'hello');
assertArraysEqual(test2, ['groundhello', 'controlhello', 'tohello', 'majorhello', 'tomhello']);

let test3 = map(words, word => word.length);
assertArraysEqual(test3, [6,7,2,5,3]);