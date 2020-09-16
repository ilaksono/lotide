const countLetters = (str) => {
  let alphaObj = {};
  for (let a of str) {
    alphaObj[a] ? alphaObj[a]++ : alphaObj[a] = 1;
  }
  //OR could use
  // let arr = [...str];
  // arr.forEach((val, index) => Number.IsNaN(Number(alphaObj[val])) ? alphaObj[val] = 1 : alphaObj++);
  return alphaObj;
};

console.log(countLetters('iuashdkjhsajkd'));