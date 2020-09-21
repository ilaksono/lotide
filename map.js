const map = function(arr, func) {
  let res = [];
  for (let a of arr)
    res.push(func(a));
  return res;
};

module.exports = map;
