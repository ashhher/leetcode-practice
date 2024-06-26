/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    /* ---------------- 存进位 ---------------- */
    let dummy = new ListNode(-1),
        p = dummy;
    let carry = 0;
    while (l1 || l2 || carry > 0) {
        let val = carry;
        if (l1) {
            val += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            val += l2.val;
            l2 = l2.next;
        }
        carry = Math.floor(val / 10);
        val = val % 10;
        p.next = new ListNode(val);
        p = p.next;
    }
    return dummy.next;
};
// @lc code=end