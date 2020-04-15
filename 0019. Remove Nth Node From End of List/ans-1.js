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
var removeNthFromEnd = function (head, n) {
  let length = 0;

  let cur = head;

  while (cur) {
    length++;
    cur = cur.next;
  }

  if (n === length) {
    head = head.next;
    return head;
  }

  let i = 1;
  cur = head;
  while (cur) {
    if (i === length - n) {
      cur.next = cur.next.next;
    }

    cur = cur.next;
    i++;
  }

  return head;
};
