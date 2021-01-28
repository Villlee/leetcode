/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var reverseNumber = 0;
    var z = x;
    if(x < 0){
        return false;
    }
    while(x != 0){
        var y = x %10;
        reverseNumber = reverseNumber *10 + y;
        x = parseInt(x/10);
    }
    if( z === reverseNumber){
        return true;
    }else{
        return false;
    }
};
isPalindrome(-121)
// @lc code=end

