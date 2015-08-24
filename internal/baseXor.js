var arrayPush = require('./arrayPush'),
    baseDifference = require('./baseDifference'),
    baseUniq = require('./baseUniq');

/**
 * The base implementation of methods like `_.xor`, without support for
 * callback shorthands, that accepts an array of arrays to inspect.
 *
 * @private
 * @param {Array} arrays The arrays to inspect.
 * @param {Function} [iteratee] The function invoked per element.
 * @returns {Array} Returns the new array of values.
 */
function baseXor(arrays, iteratee, comparator) {
  var index = -1,
      length = arrays.length;

  while (++index < length) {
    var result = result
      ? arrayPush(
          baseDifference(result, arrays[index], iteratee, comparator),
          baseDifference(arrays[index], result, iteratee, comparator)
        )
      : arrays[index];
  }
  return (result && result.length) ? baseUniq(result, iteratee, comparator) : [];
}

module.exports = baseXor;
