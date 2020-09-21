const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
const flatten = require('./flatten');
const flattenDeep = require('./flattenDeep');
const letterPositions = require('./letterPositions');
const map = require('./map');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const eqObjects = require('./eqObjects');
const takeUntil = require('./takeUntil');
const without = require('./without');
const assertArraysEqual = require('./assertArraysEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const assertEqual = require('./assertEqual');

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  countLetters: countLetters,
  countOnly: countOnly,
  eqArrays: eqArrays,
  flatten: flatten,
  flattenDeep: flattenDeep,
  letterPositions: letterPositions,
  map: map,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  eqObjects: eqObjects,
  takeUntil: takeUntil,
  without: without,
  assertArraysEqual: assertArraysEqual,
  assertObjectsEqual: assertObjectsEqual,
  assertEqual: assertEqual
};