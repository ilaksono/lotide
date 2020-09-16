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

const eqObjects = (obj1, obj2) => {
  if (Object.keys(obj1).length === Object.keys(obj2).length) {
    for (let key in obj1) {
      if (Array.isArray(obj1[key])) {
        if (!eqArrays(obj1[key], obj2[key]))
          return false;
      } else if (obj1[key] !== obj2[key])
        return false;
    }
  } else
    return false;
  return true;
};

const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  console.log(`Example label: ${inspect(actual)}`);
  return eqObjects(actual, expected) ? console.log(`✅ Assertion Passed ✅: ${inspect(actual)} === ${inspect(expected)}`) : console.log(`${String.fromCodePoint(0x1F631)} Assertion Failed ${String.fromCodePoint(0x1F631)}: '${inspect(actual)}' !== '${inspect(expected)}'`);
};

assertObjectsEqual({ a: '1', b: 2}, { b: 2, a: '1'});
//assertion passed: {a: '1', b: 2 === b: 2, a: '1'}