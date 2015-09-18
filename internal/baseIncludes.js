import baseIndexOf from './baseIndexOf';

function baseIncludes(array, value) {
  return baseIndexOf(array, value, 0) > -1;
}

export default baseIncludes;
