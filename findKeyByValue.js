const findKeyByValue = (obj, val) => {
  for (const [key, value] of Object.entries(obj)) {
    if (val === value)
      return key;
  }
  return;
};

module.exports = findKeyByValue;