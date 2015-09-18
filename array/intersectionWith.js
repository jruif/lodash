import arrayMap from '../internal/arrayMap';
import baseIntersection from '../internal/baseIntersection';
import last from './last';
import rest from '../function/rest';
import toArrayLikeObject from '../internal/toArrayLikeObject';

/**
 * This method is like `_.intersection` except that it accepts `comparator`
 * which is invoked to compare elements of `arrays`. The comparator is invoked
 * with two arguments: (arrVal, othVal).
 *
 * @static
 * @memberOf _
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @param {Function} [comparator] The function invoked per element.
 * @returns {Array} Returns the new array of shared values.
 * @example
 *
 * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
 * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
 *
 * _.intersectionWith(objects, others, _.isEqual);
 * // => [{ 'x': 1, 'y': 2 }]
 */
var intersectionWith = rest(function(arrays) {
  var comparator = last(arrays),
      mapped = arrayMap(arrays, toArrayLikeObject);

  if (comparator === last(mapped)) {
    comparator = undefined;
  } else {
    mapped.pop();
  }
  return (mapped.length && mapped[0] === arrays[0])
    ? baseIntersection(mapped, undefined, comparator)
    : [];
});

export default intersectionWith;
