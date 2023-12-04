/* 现给定一个函数 fn ，一个参数数组 args 和一个以毫秒为单位的超时时间 t ，返回一个取消函数 cancelFn 。

在经过 t 毫秒的延迟后，应该调用 fn 函数，并将 args 作为参数传递。除非 在 t 毫秒的延迟过程中，在 cancelT 毫秒时调用了 cancelFn。并且在这种情况下，fn 函数不应该被调用。

示例 1:

输入：fn = (x) => x * 5, args = [2], t = 20, cancelT = 50
输出：[{"time": 20, "returned": 10}]
解释：
const cancel = cancellable((x) => x * 5, [2], 20); // fn(2) 在 t=20ms 时被调用
setTimeout(cancel, 50);

取消操作被安排在延迟了 cancelT（50毫秒）后进行，这发生在 fn(2) 在20毫秒时执行之后。
示例 2：

输入：fn = (x) => x**2, args = [2], t = 100, cancelT = 50
输出：[]
解释：
const cancel = cancellable((x) => x**2, [2], 100); // fn(2) 没被调用
setTimeout(cancel, 50);

取消操作被安排在延迟了 cancelT（50毫秒）后进行，这发生在 fn(2) 在100毫秒时执行之前，导致 fn(2) 从未被调用。
示例 3：

输入：fn = (x1, x2) => x1 * x2, args = [2,4], t = 30, cancelTime = 100
输出：[{"time": 30, "returned": 8}]
解释：
const cancel = cancellable((x1, x2) => x1 * x2, [2,4], 30); // fn(2,4) 在 t=30ms 时被调用
setTimeout(cancel, 100);

取消操作被安排在延迟了 cancelT（100毫秒）后进行，这发生在 fn(2,4) 在30毫秒时执行之后。 */

/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
// var cancellable = function (fn, args, t) {
//   const timer = setTimeout(() => {
//     return fn(...args)
//   }, t)
//   return () => {
//     clearTimeout(timer)
//   }
// }

const fn = (x) => {
  console.log(x * 5)
  return x * 5
}
const args = [2]
const t = 500
var cancellable = function (fn, args, t) {
  const timeout = setTimeout(() => fn(...args), t)
  return () => clearTimeout(timeout)
}
const cancel = cancellable(fn, [2], 500)
setTimeout(cancel, 400)

/**
 *  const result = []
 *
 *  const fn = (x) => x * 5
 *  const args = [2], t = 20, cancelT = 50
 *
 *  const start = performance.now()
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr)})
 *  }
 *
 *  const cancel = cancellable(log, args, t);
 *
 *  const maxT = Math.max(t, cancelT)
 *
 *  setTimeout(() => {
 *     cancel()
 *  }, cancelT)
 *
 *  setTimeout(() => {
 *     console.log(result) // [{"time":20,"returned":10}]
 *  }, maxT + 15)
 */
