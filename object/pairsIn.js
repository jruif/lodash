var basePairs = require('../internal/basePairs'),
    keysIn = require('./keysIn');

/**
 * Creates an array of own and inherited enumerable key-value pairs for `object`.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the new array of key-value pairs.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.pairsIn(new Foo);
 * // => [['a', 1], ['b', 2], ['c', 1]] (iteration order is not guaranteed)
 */
function pairsIn(object) {
  return basePairs(object, keysIn(object));
}

module.exports = pairsIn;
