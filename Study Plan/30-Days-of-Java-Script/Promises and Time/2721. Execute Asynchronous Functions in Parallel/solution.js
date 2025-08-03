/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
  return new Promise((resolve, reject) => {
    const results = [];
    let counted = 0;

    functions.forEach((fn, index) => {
      try {
        fn()
          .then(result => {
            results[index] = result;
            counted++;
            if (counted === functions.length) {
              resolve(results);
            }
          })
          .catch(reject);
      }
      catch (error) {
        reject(error);
      }
    });
    if (functions.length === 0) {
      resolve([]);
    }
  });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */