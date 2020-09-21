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

module.exports = flatten;