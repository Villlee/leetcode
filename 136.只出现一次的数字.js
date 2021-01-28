/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    for (let i = 0; i < nums.length-1; i++) {
        for (let j = i; j < nums.length; j++) {
            if(nums[i] === nums[j])
            nums.splice(nums[i],1);
            nums.splice(nums[j],1)
        }
        return nums[i];
    }
};
// @lc code=end

