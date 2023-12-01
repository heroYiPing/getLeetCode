/* 请你编写一个函数，它接收另一个函数作为输入，并返回该函数的 记忆化 后的结果。

记忆函数 是一个对于相同的输入永远不会被调用两次的函数。相反，它将返回一个缓存值。

你可以假设有 3 个可能的输入函数：sum 、fib 和 factorial 。

 sum 接收两个整型参数 a 和 b ，并返回 a + b 。
 fib 接收一个整型参数 n ，如果 n <= 1 则返回 1，否则返回 fib (n - 1) + fib (n - 2)。
 factorial 接收一个整型参数 n ，如果 n <= 1 则返回  1 ，否则返回 factorial(n - 1) * n 。
 

示例 1：

输入：
fnName = "sum"
actions = ["call","call","getCallCount","call","getCallCount"]
values = [[2,2],[2,2],[],[1,2],[]]
输出：[4,4,1,3,2]
解释：
const sum = (a, b) => a + b;
const memoizedSum = memoize(sum);
memoizedSum (2, 2);// "call" - 返回 4。sum() 被调用，因为之前没有使用参数 (2, 2) 调用过。
memoizedSum (2, 2);// "call" - 返回 4。没有调用 sum()，因为前面有相同的输入。
"getCallCount" - 总调用数： 1
memoizedSum(1、2);// "call" - 返回 3。sum() 被调用，因为之前没有使用参数 (1, 2) 调用过。
"getCallCount" - 总调用数： 2
示例 2：

输入：
fnName = "factorial"
actions = ["call","call","call","getCallCount","call","getCallCount"]
values = [[2],[3],[2],[],[3],[]]
输出：[2,6,2,2,6,2]
解释：
const factorial = (n) => (n <= 1) ? 1 : (n * factorial(n - 1));
const memoFactorial = memoize(factorial);
memoFactorial(2); // "call" - 返回 2。
memoFactorial(3); // "call" - 返回 6。
memoFactorial(2); // "call" - 返回 2。 没有调用 factorial()，因为前面有相同的输入。
"getCallCount" -  总调用数：2
memoFactorial(3); // "call" - 返回 6。 没有调用 factorial()，因为前面有相同的输入。
"getCallCount" -  总调用数：2
示例 3：

输入：
fnName = "fib"
actions = ["call","getCallCount"]
values = [[5],[]]
输出：[8,1]
解释：
 fib 接收一个整型参数 n ，如果 n <= 1 则返回 1，否则返回 fib (n - 1) + fib (n - 2)。
fib(5) = 8 // "call"
"getCallCount" - 总调用数：1

 

提示：

0 <= a, b <= 105
1 <= n <= 10
actions.length === values.length
actions[i] 为 "call" 和 "getCallCount" 中的一个
fnName 为 "sum", "factorial" 和 "fib" 中的一个 */

/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  let cache = {}
  return function (...args) {
    if (cache.hasOwnProperty(args)) {
      return cache[args]
    }
    // 将参数作为字段名存入对象中，字段值为返回的结果
    cache[args] = fn(...args)
    // 返回结果
    return cache[args]
  }
}

let callCount = 0
const memoizedFn = memoize(function (a, b) {
  callCount += 1
  return a + b
})
memoizedFn(2, 2) // 4
memoizedFn(2, 3) // 5
console.log(callCount) // 2
