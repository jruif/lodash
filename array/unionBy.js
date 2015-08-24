var baseFlatten = require('../internal/baseFlatten'),
    baseIteratee = require('../internal/baseIteratee'),
    baseUniq = require('../internal/baseUniq'),
    isArrayLikeObject = require('../lang/isArrayLikeObject'),
    last = require('./last'),
    rest = require('../function/rest');

/**
 * This method is like `_.union` except that it accepts `iteratee` which is
 * invoked for each element of each `arrays` to generate the criterion by which
 * uniqueness is computed. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @param {Function|Object|string} [iteratee=_.identity] The function invoked per element.
 * @returns {Array} Returns the new array of combined values.
 * @example
 *
 * _.unionBy([2.1, 1.2], [4.3, 2.4], Math.floor);
 * // => [2.1, 1.2, 4.3]
 *
 * // using the `_.property` callback shorthand
 * _.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
 * // => [{ 'x': 1 }, { 'x': 2 }]
 */
var unionBy = rest(function(arrays) {
  var iteratee = last(arrays);
  if (isArrayLikeObject(iteratee)) {
    iteratee = undefined;
  }
  return baseUniq(baseFlatten(arrays, false, true), baseIteratee(iteratee));
});

module.exports = unionBy;
