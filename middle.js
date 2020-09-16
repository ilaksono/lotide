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
    console.log(`${[String.fromCodePoint(0x1F631)]} Assertion Failed ${String.fromCodePoint(0x1F631)}: ${ar1} !== ${ar2}.`);
  return;
};

const middle = arr => {
  if (arr.length >= 0 && arr.length <= 2)
    return [];
  if (arr.length % 2 === 1)
    return [arr[Math.floor(arr.length / 2)]];
  return [arr[arr.length / 2 - 1], arr[arr.length / 2]];
};

console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]

console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]