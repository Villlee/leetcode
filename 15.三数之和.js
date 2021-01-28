/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const arrTarget = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++){
            if (nums[i] >nums[j]) {
                const k = nums[j];
                nums[j] = nums[i];
                nums[i] = k;
            }
        }
    }
    for (let i = 0; i < nums.length; i++) {
        var left = 1,right = nums.length-1;
        var sum = nums[left] + nums[right];
        while(left < right){
            var sumTarget = -nums[i];
            if(sumTarget == sum){
                var arr = [nums[i],nums[left],nums[right]];
                arrTarget.push(arr);
                left++;
            }else if(sumTarget > sum){
                right--;
            }else if(sumTarget < sum){
                left++;
            }
        }
    }
    return arrTarget;
};
threeSum([-1,0,1,2,-1,-4])
// @lc code=end

