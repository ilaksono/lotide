const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅ Assertion Passed ✅: ${actual} === ${expected}`) : console.log(`${String.fromCodePoint(0x1F631)} Assertion Failed ${String.fromCodePoint(0x1F631)}: '${actual}' !== '${expected}'`);
};

const findKeyByValue = (obj, val) => {
  for (const [key, value] of Object.entries(obj)) {
    if (val === value)
      return key;
  }
  return;
};

//another solution:
// const findKeyByValue = (obj, val) => {
//   let keys = Object.keys(obj);
//   for (let a of keys) {
//     if (obj[a] === val)
//       return a;
//   }
//   return;
// };


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const res1 = findKeyByValue({testProp1: 3, testProp2: 0}, 0);
assertEqual(res1, 'testProp2');

