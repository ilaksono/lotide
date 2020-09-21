const findKey = (obj, cb) => {
  for (let [key, value] of Object.entries(obj)) {
    if (cb(value) || cb(key))
      return key;
  }
};

module.exports = findKey;