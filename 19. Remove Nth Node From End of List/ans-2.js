/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let tmp = {};
  tmp.next = head;

  let rabbit = tmp;
  let turtle = tmp;

  for (let i = 0; i < n + 1; i++) {
    rabbit = rabbit.next;
  }

  while (rabbit && turtle) {
    rabbit = rabbit.next;
    turtle = turtle.next;
  }

  turtle.next = turtle.next.next;

  return tmp.next;
};
