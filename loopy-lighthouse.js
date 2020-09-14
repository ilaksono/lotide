const loopyLighthouse = (arr1, arr2, arr3) => {
  for(let i = arr1[0]; i <= arr1[1]; i++) {
    if(!(i % arr2.reduce((res,a) => res * a, 1))) 
      console.log(arr3.join(''));
    else if(!(i % arr2[0]))
      console.log(arr3[0]);
    else if(!(i % arr2[1]))
      console.log(arr3[1]);
    else 
      console.log(i);
  }
};

console.log(loopyLighthouse([1,100], [3,5], ['This','Word']));