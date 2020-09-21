
// const cd = [1,2,3,4];
'use strict'
// const mutate = obj => {
//   obj2 = [...obj];
//   obj2 = obj.splice(0,2);
//   return obj2;
// }

// console.log(mutate(cd), cd);

// log = console.log;
// console.log(log('Hello'));

// const test = () => {
//   let arr = [1,223,4,1,23,5];
//   for(let a in arr) {
//     console.log(a);
//   }
// }
// test();

// const sum1toN = n => {
//   if(n > 0)
//     return sum1toN(n-1) + n;
//   return 0;  
// }

// console.log(sum1toN(5));

const obj = {
  a: 1,
  b: 2,
  length: Object.keys(this).length
};

let obj2 = {
  a: 1,
  b: 2,
  length: () => Object.keys(this).length,
  c: function() { 
    return this.a;
  }
}


let obj3 = {
  a: 1,
  b: 2,
  length: function() { 
    return Object.keys(this).length;
  }
}

console.log(obj.length);

console.log(obj2.length());
console.log(obj2.c());

console.log(obj3.length());