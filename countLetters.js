const countLetters = (str) => {
  let alphaObj = {};
  for (let a of str)
    alphaObj[a] ? alphaObj[a]++ : alphaObj[a] = 1;
  delete alphaObj[' '];
  return alphaObj;
};

module.exports = countLetters;