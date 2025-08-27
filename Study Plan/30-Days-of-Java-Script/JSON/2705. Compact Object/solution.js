/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
  if (Array.isArray(obj)) {
    const result = [];
    for (let item of obj) {
      if (typeof item === 'object' && item !== null) {
        item = compactObject(item);
      }
      if (item) {
        result.push(item);
      }
    };
    return result;
  }

  else if (typeof obj === 'object' && obj !== null) {
    const result = {};
    for (let key in obj) {
      let value = obj[key];
      if (typeof value === 'object' && value !== null) {
        value = compactObject(value);
      }
      if (value) {
        result[key] = value;
      }
    }
    return result;
  }
  return obj;
};