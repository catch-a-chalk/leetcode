/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
  let current = arr;
  for (let depth = 0; depth < n; depth++) {
    let flattened = [];
    let hasArrays = false;
    
    for (const item of current) {
      if (Array.isArray(item)) {
        flattened.push(...item);
        hasArrays = true;
      } else {
        flattened.push(item);
      }
    }
    current = flattened;
    if (!hasArrays) break;
  }
  return current;
};