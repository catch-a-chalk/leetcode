/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
  return arr.reduce((acc, val, i) => {
      if (fn(val, i)) acc.push(val);
      return acc;
  }, []);
};
