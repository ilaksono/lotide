const middle = arr => {
  if (arr.length >= 0 && arr.length <= 2)
    return [];
  if (arr.length % 2 === 1)
    return [arr[Math.floor(arr.length / 2)]];
  return [arr[arr.length / 2 - 1], arr[arr.length / 2]];
};


module.exports = middle;