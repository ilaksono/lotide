# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ilaksono/lotide`

**Require it:**

`const _ = require('@ilaksono/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(...)`: description
* `function2(...)`: description
* `function3(...)`: description
* `head(arr)`: returns first element of an array
* `tail(arr)`: returns an array without first element
* `middle(arr)`: returns array of middle element(s) of argument array
* `countLetters(str)`: returns object with count of letters in argument string,
* `countOnly(arrSource, objToCount)`: returns object of count for each array element with true in obj
* `eqArrays(arr1, arr2)`: returns true for 2 equal arrays, and false for 2 non equal arrays
* `flatten(arr)`: returns a flattened 2D array to 1D
* `flattenDeep(arr)`: returns a flattened array of multiple nestings to 1D,
* `letterPositions(str)`: returns object with arrays of index positions for each letter in arg string
* `map(arr, cb)`: returns array of elements from src array with true on cb
* `findKey(obj, cb)`: returns first key in obj which valuates true in cb
* `findKeyByValue(obj, val)`: returns first property in obj with value(val)
* `eqObjects(obj1, obj2)`: returns true for 2 equal objects, and false for 2 non equal
* `takeUntil(arr, cb)`: returns array elements from index 0 until value where cb evaluates true
* `without(arr1, arr2)`: returns array of elements from arr1 with arr2 elements removed
* `assertArraysEqual(arr1, arr2)`: returns undefined; logs assertion pass if 2 arrays are equal
* `assertObjectsEqual(obj1, obj2`: returns undefined; logs assertion pass if 2 objects are equal
* `assertEqual(val1, val2)`: returns undefined; logs assertion pass if 2 values are equal