const assertEqual = require('./assertEqual');

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

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

module.exports = countOnly;