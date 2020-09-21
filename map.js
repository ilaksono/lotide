const assertArraysEqual = require('./assertArraysEqual');

const map = function(arr, func) {
  let res = [];
  for (let a of arr)
    res.push(func(a));
  return res;
};

const words = ["ground", "control", "to", "major", "tom"];
let test1 = map(words, word => word[0]);
assertArraysEqual(test1, ['g', 'c', 't', 'm', 't']);

let test2 = map(words, word => word + 'hello');
assertArraysEqual(test2, ['groundhello', 'controlhello', 'tohello', 'majorhello', 'tomhello']);

let test3 = map(words, word => word.length);
assertArraysEqual(test3, [6,7,2,5,3]);

module.exports = map;
