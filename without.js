const without = (src, rm) => {
  return [...src].filter(val => {
    for (let a of rm) {
      if (val === a)
        return false;
    }
    return true;
  });
};

module.exports = without;

