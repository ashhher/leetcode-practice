/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let l = 0,
        r = height.length - 1,
        max = 0;

    while (l < r) {
        const cur = (r - l) * Math.min(height[l], height[r]);
        if (cur > max) max = cur;
        if (height[l] < height[r]) {
            l++;
        } else {
            r--;
        }
    }
    return max;
};
// @lc code=end