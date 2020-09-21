const takeUntil = (arr, cb) => {
  let i = 0;
  while(!cb(arr[i]))
    i++;
  return arr.slice(0, i);
};

module.exports = takeUntil;