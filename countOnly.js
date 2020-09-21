const countOnly = (allItems, itemsToCount) => {
  let count = {};
  for (const [key,value] of Object.entries(itemsToCount)) {
    console.log(value);
    if (value)
      count[key] = (allItems.reduce((a, val) => val === key ? a + 1 : a, 0));
    if (!count[key])
      delete count[key];
  }
  console.log(count);
  return count;
};

module.exports = countOnly;