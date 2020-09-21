const assertEqual = require('./assertEqual');
const tail = require('../tail');

const expectRes = ['Lighthouse', 'Labs'];

for (let i = 0; i < expectRes.length; i++) {
  assertEqual(tail(['Hello', 'Lighthouse', 'Labs'])[i], expectRes[i]);
}