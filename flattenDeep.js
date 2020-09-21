const flattenDeep = arr => {
  let a = [...arr];
  for (let i = 0; i < a.length; i++) {
    while (Array.isArray(a[i])) {
      let temp = a[i];
      a.splice(i, 1, ...temp);
    }
  }
  return a;
};

console.log(flattenDeep([1, 2, [[[[3]]], 4], 5, [6]]));

module.exports = flattenDeep;