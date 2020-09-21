const letterPositions = str => {
  let res = {};
  let cpy = [...str];
  cpy.forEach((val, ind) => res[val] ? res[val].push(ind) : res[val] = [ind]);
  delete res[' '];
  return res;
};

module.exports = letterPositions;
