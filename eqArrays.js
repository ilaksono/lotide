const eqArrays = function(ar1, ar2) {
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

module.exports = eqArrays;