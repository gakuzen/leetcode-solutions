# 15. 3Sum

> Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
>
> Note:
>
> The solution set must not contain duplicate triplets.
>
> Example:
>
> Given array nums = [-1, 0, 1, 2, -1, -4],
>
> A solution set is:
> [
> [-1, 0, 1],
> [-1, -1, 2]
> ]

## #1 Solution

- Approach: Sort and add to set inside nested loops
- Time complexity: O(n^2)
- Space complexity: O(n)

## #2 Solution

- Approach: Sort first, then two pointers moving inwards from each ends
- Time complexity: O(n^2)
- Space complexity: O(1)
