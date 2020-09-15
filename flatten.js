const flatten = (arr) => {
  let a = [...arr];
  for (let i = 0; i < a.length; i++) {
    while(Array.isArray(a[i])) {
      let temp = a[i];
      a.splice(i, 1, ...temp);
    }
  }
  return a;
};

// const flattenv2 = arr => {
//   const a = arr.map((a, i, ar) => {
//     while(Array.isArray(a)) {
//       let temp = a;
//       ar.splice(i, 1, ...temp);
//     }
//   });
//   return a;
// };
console.log(flatten([1, 2, [[[[3]]], 4], 5, [6]]));
