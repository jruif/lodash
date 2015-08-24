var baseForIn = require('./baseForIn');

/**
 * The base implementation of  `_.pickBy` without support for callback shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, predicate) {
  var result = {};
  baseForIn(object, function(value, key) {
    if (predicate(value)) {
      result[key] = value;
    }
  });
  return result;
}

module.exports = basePickBy;
