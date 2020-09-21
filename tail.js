const assertEqual = require('./assertEqual');

const tail = arr => arr.slice(1, arr.length);

const expectRes = ['Lighthouse', 'Labs'];

for (let i = 0; i < expectRes.length; i++) {
  assertEqual(tail(['Hello', 'Lighthouse', 'Labs'])[i], expectRes[i]);
}
module.exports = tail;