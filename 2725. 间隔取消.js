/* 现给定一个函数 fn，一个参数数组 args 和一个时间间隔 t，返回一个取消函数 cancelFn。

函数 fn 应该立即使用 args 调用，并且在每个 t 毫秒内再次调用，直到调用 cancelFn。

 

示例 1：

输入：fn = (x) => x * 2, args = [4], t = 35, cancelT = 190
输出：
[
   {"time": 0, "returned": 8},
   {"time": 35, "returned": 8},
   {"time": 70, "returned": 8},
   {"time": 105, "returned": 8},
   {"time": 140, "returned": 8},
   {"time": 175, "returned": 8}
]
解释： 
const result = []
const fn = (x) => x * 2
const args = [4], t = 35, cancelT = 190

const start = performance.now()

const log = (...argsArr) => {
    const diff = Math.floor(performance.now() - start)
    result.push({"time": diff, "returned": fn(...argsArr)})
}

const cancel = cancellable(log, [4], 35);
setTimeout(cancel, 190);

setTimeout(() => {
    console.log(result) // Output
 }, cancelT + t + 15) 

每隔 35ms，调用 fn(4)。直到 t=190ms，然后取消。
第一次调用 fn 是在 0ms。fn(4) 返回 8。
第二次调用 fn 是在 35ms。fn(4) 返回 8。
第三次调用 fn 是在 70ms。fn(4) 返回 8。
第四次调用 fn 是在 105ms。fn(4) 返回 8。
第五次调用 fn 是在 140ms。fn(4) 返回 8。
第六次调用 fn 是在 175ms。fn(4) 返回 8。
在 t=190ms 时取消
示例 2：

输入：fn = (x1, x2) => (x1 * x2), args = [2, 5], t = 30, cancelT = 165
输出： 
[
   {"time": 0, "returned": 10},
   {"time": 30, "returned": 10},
   {"time": 60, "returned": 10},
   {"time": 90, "returned": 10},
   {"time": 120, "returned": 10},
   {"time": 150, "returned": 10}
]
解释：
const cancel = cancellable((x1, x2) => (x1 * x2), [2, 5], 30); 
setTimeout(cancel, 165);

每隔 30ms，调用 fn(2, 5)。直到 t=165ms，然后取消。
第一次调用 fn 是在 0ms
第二次调用 fn 是在 30ms
第三次调用 fn 是在 60ms
第四次调用 fn 是在 90ms
第五次调用 fn 是在 120ms
第六次调用 fn 是在 150ms
在 165ms 取消
示例 3：

输入：fn = (x1, x2, x3) => (x1 + x2 + x3), args = [5, 1, 3], t = 50, cancelT = 180
输出：
[
   {"time": 0, "returned": 9},
   {"time": 50, "returned": 9},
   {"time": 100, "returned": 9},
   {"time": 150, "returned": 9}
]
解释：
const cancel = cancellable((x1, x2, x3) => (x1 + x2 + x3), [5, 1, 3], 50);
setTimeout(cancel, cancelT);

每隔 50ms，调用 fn(5, 1, 3)。直到 t=180ms，然后取消。
第一次调用 fn 是在 0ms
第二次调用 fn 是在 50ms
第三次调用 fn 是在 100ms
第四次调用 fn 是在 150ms
在 180ms 取消 */

/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function (fn, args, t) {
  fn(...args);
  const timer = setInterval(() => {
    fn(...args);
  }, t);
  return () => clearInterval(timer);
};

const fn = (x) => {
  console.log(x * 5);
  return x * 5;
};
const args = [2];
const t = 500;

let cancelT = cancellable(fn, args, t);

// cancellable(fn, args, t);

setTimeout(() => {
  console.log("over");
  cancelT();
}, 3000);

/**
 *  const result = []
 *
 *  const fn = (x) => x * 2
 *  const args = [4], t = 35, cancelT = 190
 *
 *  const start = performance.now()
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start)
 *      result.push({"time": diff, "returned": fn(...argsArr)})
 *  }
 *
 *  const cancel = cancellable(log, args, t);
 *
 *  setTimeout(() => {
 *     cancel()
 *  }, cancelT)
 *
 *  setTimeout(() => {
 *    console.log(result)  // [
 *                         //      {"time":0,"returned":8},
 *                         //      {"time":35,"returned":8},
 *                         //      {"time":70,"returned":8},
 *                         //      {"time":105,"returned":8},
 *                         //      {"time":140,"returned":8},
 *                         //      {"time":175,"returned":8}
 *                         //  ]
 *  }, cancelT + t + 15)
 */
