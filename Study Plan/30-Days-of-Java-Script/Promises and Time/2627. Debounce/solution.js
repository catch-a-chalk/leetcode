/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
  let delayedCall;
  return function(...args) {
    // Обнуляем таймаут при вызове
    // Вызываем таймер через промежуток времени
    clearTimeout(delayedCall);
    delayedCall = setTimeout(() => {

    fn.apply(this, args);
    }, t);
  };
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */