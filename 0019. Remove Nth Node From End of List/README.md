# 19. Remove Nth Node From End of List

> Given a linked list, remove the n-th node from the end of > list and return its head.
>
> Example:
>
> Given linked list: 1->2->3->4->5, and n = 2.
>
> After removing the second node from the end, the linked > list becomes 1->2->3->5.
> Note:
>
> Given n will always be valid.
>
> Follow up:
>
> Could you do this in one pass?

## BCR

O(n)

## #1 Solution

- Approach: Find length first, then traverse
- Time complexity: O(2n)
- Space complexity: O(1)

## #2 Solution

- Approach: Two (n+1) steps aparted pointers moving to next node
- Time complexity: O(n)
- Space complexity: O(1)
