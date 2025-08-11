/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
  const obj = {};
  for (let i = 0; i < this.length; i++) {
    let key = fn(this[i]);
    let arr = obj[key];

    if(!arr) {
      arr = [];
      obj[key] = arr;
    }
    arr.push(this[i]);
  }
  return obj;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */