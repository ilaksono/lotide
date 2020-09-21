const assertArraysEqual = require('./assertArraysEqual');

// const without = (src, rm) => {
//   let cpy = [...src];
//   let current = rm.shift(); 
//   for(let i = 0; i < cpy.length; i++) {
//     if(current === cpy[i]) {
//       cpy.splice(i,1);
//       i--;
//     }
//   }
//   if(rm.length > 0)
//     cpy =  without(cpy, rm);
//   return cpy;
// };


const without = (src, rm) => {
  return [...src].filter(val => {
    for (let a of rm) {
      if (val === a)
        return false;
    }
    return true;
  });
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(without(['this', 'is','is', 'a', 'a', 'string'], ['a', 'is']), ['this', 'string']);


module.exports = without;

