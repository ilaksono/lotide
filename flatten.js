const flatten = arr => {
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (j = 0; j < arr[i].length; j++) {
        temp.push(arr[i][j]);
      }
    } else
      temp.push(arr[i]);
  }
  return temp;
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

// const flatten = (multiLevelArray) => {
//   const singleLevelArray = [];
//   for (let i = 0; i < multiLevelArray.length; i++) {
//     if (!Array.isArray(multiLevelArray[i])) {
//       singleLevelArray.push(multiLevelArray[i]);
//     } else {
//       for (let j = 0; j < multiLevelArray[i].length; j++) {
//         singleLevelArray.push(multiLevelArray[i][j]);
//       }
//     }
//   }
//   return singleLevelArray;
// }

console.log(flatten([1, 2, [[[[3]]], 4], 5, [6]]));
//[1, 2, [[[Array]]], 4 ,5, 6]