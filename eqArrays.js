const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅ Assertion Passed ✅: ${actual} === ${expected}`) : console.log(`${String.fromCodePoint(0x1F631)} Assertion Failed ${String.fromCodePoint(0x1F631)}: '${actual}' !== '${expected}'`);
};

// const eqArrays = (arr1, arr2) => {
//   let max = -1;
//   arr2.length > arr1.length ? max = arr2.length : max = arr1.length;
//   if (arr2.length > max)
//     max = arr2.length;
//   for (let i = 0; i < max; i++) {
//     if (arr1[i] !== arr2[i])
//       return false;
//   }
//   if (max === -1)
//     return false;
//   return true;
// };

const eqArrays = (arr1, arr2) => {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
        if (!eqArrays(arr1[i], arr2[i]))
          return false;
      } else if (arr1[i] !== arr2[i])
        return false;
    }
  } else
    return false;

  return true;
};


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2]), false);
assertEqual(eqArrays([1,[[2],3]],[1,[[2],3]]), true);
