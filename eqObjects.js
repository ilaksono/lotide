const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const eqObjects = (obj1, obj2) => {
  if (Object.keys(obj1).length === Object.keys(obj2).length) {
    for (let key in obj1) {
      if (Array.isArray(obj1[key])) {
        if (!eqArrays(obj1[key], obj2[key]))
          return false;
      } else if (typeof obj1[key] === 'object') {
        if (!eqObjects(obj1[key], obj2[key]))
          return false;
      }
      else if (obj1[key] !== obj2[key])
        return false;
    }
  } else
    return false;
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
let res1 = eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
let res2 = eqObjects(ab, abc); // => false

assertEqual(res1, true);
assertEqual(res2, false);

assertEqual(eqObjects({
  a: {
    name: 'Peter',
    val: 5
  },
  b: {
    name: 'Jim',
    val: 4
  }
}, {
  a: {
    name: 'Peter',
    val: 5
  },
  b: {
    name: 'Jim',
    val: 5
  }
}), false);

/*
In this simple scenario, two objects are equal when:

They have the same number of keys
The value for each key in one object is the same as the value for that same key in the other object
*/

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
let test1 = eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
let test2 = eqObjects(cd, cd2); // => false

assertEqual(test1, true);
assertEqual(test2, false);

const t1 = eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }); // => true
// const t2 = eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }) // => false
// const t3 = eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }) // => false

assertEqual(t1, true);

module.exports = eqObjects;