const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅ Assertion Passed ✅: ${actual} === ${expected}`) : console.log(`${String.fromCodePoint(0x1F631)} Assertion Failed ${String.fromCodePoint(0x1F631)}: '${actual}' !== '${expected}'`);
};

const head = (arr) => {
  return arr[0];
}

assertEqual(head([]), 5);