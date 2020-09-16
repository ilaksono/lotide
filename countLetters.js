const countLetters = (str) => {
  let alphaObj = {};
  for (let a of str) {
    alphaObj[a] ? alphaObj[a]++ : alphaObj[a] = 1;
  }
  return alphaObj;
};

console.log(countLetters('iuashdkjhsajkd'));