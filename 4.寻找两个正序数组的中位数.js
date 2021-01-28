/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const nums3 = [...nums1,...nums2];
    for (let i = 0; i < nums3.length -1; i++) {
        for (let m = 0; m < nums3.length - 1 -i; m++) {
            if(nums3[m]>nums3[m+1]){
                const number = nums3[m+1];
                nums3[m+1] = nums3[m];
                nums3[m] = number;
            }
            
        }    
    }
    if(nums3.length % 2 === 0){
        const j = parseInt(nums3.length/2);
        const k = (nums3[j-1]+nums3[j])/2;
        return k
    }else{
        const i = parseInt(nums3.length /2);
        return nums3[i]
    }
};
findMedianSortedArrays([1,2],[-1,-3])
// @lc code=end

