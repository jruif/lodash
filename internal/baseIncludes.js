var baseIndexOf = require('./baseIndexOf');

function baseIncludes(array, value) {
  return baseIndexOf(array, value, 0) > -1;
}

module.exports = baseIncludes;
