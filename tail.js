const tail = arr => {
  return arr.slice(1, arr.length);
};

const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅ Assertion Passed ✅: ${actual} === ${expected}`) : console.log(`${String.fromCodePoint(0x1F631)} Assertion Failed ${String.fromCodePoint(0x1F631)}: '${actual}' !== '${expected}'`);
};
const expectRes = ['Lighthouse', 'Labs'];

for (let i = 0; i < expectRes.length; i++) {
  assertEqual(tail(['Hello', 'Lighthouse', 'Labs'])[i], expectRes[i]);
}
module.exports = tail;