/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  return {
    initVal: init,
    increment: function increment() {
      return ++init
    },
    decrement: function decrement() {
      return --init
    },
    reset: function reset() {
      return (init = this.initVal)
    }
  }
}

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

const counter = createCounter(5)
console.log(counter.increment()) // 6
console.log(counter.reset()) // 5
console.log(counter.decrement()) // 4
