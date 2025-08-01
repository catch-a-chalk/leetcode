/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = function(promise1, promise2) {
  return new Promise((resolve) => {
    promise1.then((num1) => {
      promise2.then((num2) => {
          resolve(num1 + num2);
      });
    });
  });
};


/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */