const assertEqual = require('./assertEqual');

const eqArrays = (ar1, ar2) => {
  let arr1 = [...ar1];
  let arr2 = [...ar2];
  if(arr1.length === 0 && arr2.length === 0)
    return true;
  if (arr1.length !== arr2.length)
    return false;
  cur = arr1.shift();
  can = arr2.shift();
  if (Array.isArray(cur) !== Array.isArray(can))
    return false;
  if (Array.isArray(cur) && Array.isArray(can) && !eqArrays(cur, can))
    return false;
  if (cur !== can)
    return false;
  return eqArrays(arr1, arr2);
};
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, [2], 3], [1, 2]), false);
// assertEqual(eqArrays([1,[[2],3]],[1,[[2],3]]), true);
// assertEqual(eqArrays([1,[2],3],[1,[2],[3]]), false);
// assertEqual(eqArrays([1,[2],[3]],[1,[2],[3]]), true);
// assertEqual(eqArrays([[[[[[[1]]]]]]], [[[[[1]]]]]), false)
// assertEqual(eqArrays([[[1]]], [[[2]]]), false)

module.exports = eqArrays;