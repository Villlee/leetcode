/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  var reverseNumber = 0;
  while (x != 0) {
    var y = x % 10;
    reverseNumber = reverseNumber * 10 + y;
    x = parseInt(x / 10);
  }
  if (reverseNumber < -2147483648 || reverseNumber > 2147483647) {
    return 0;
  } else {
    return reverseNumber;
  }
};
// @lc code=end
