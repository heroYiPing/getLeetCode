// 给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。

// 如果数组中不存在目标值 target，返回 [-1, -1]。

// 你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。
// 示例 1：

// 输入：nums = [5,7,7,8,8,10], target = 8
// 输出：[3,4]
// 示例 2：

// 输入：nums = [5,7,7,8,8,10], target = 6
// 输出：[-1,-1]
// 示例 3：

// 输入：nums = [], target = 0
// 输出：[-1,-1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const newArr = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == target) {
      newArr.push(i)
    }
  }
  if (newArr.length == 1) {
    newArr.push(newArr[0])
  }
  if (nums.length == 0 || newArr.length == 0) {
    newArr = [-1, -1]
  }
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 6))
console.log(searchRange([6], 6))
