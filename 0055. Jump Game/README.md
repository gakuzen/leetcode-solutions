# 55. Jump Game

> Given an array of non-negative integers, you are initially positioned at the first index of the array.
>
> Each element in the array represents your maximum jump length at that position.
>
> Determine if you are able to reach the last index.
>
> Example 1:
>
> Input: [2,3,1,1,4]
> Output: true
> Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
> Example 2:
>
> Input: [3,2,1,0,4]
> Output: false
> Explanation: You will always arrive at index 3 no matter what. Its maximum
> jump length is 0, which makes it impossible to reach the last index.

## BCR

- Time complexity: O(n)

## #1 Solution

- Approach: Brute force by recursive
- Time complexity: O(L^n), where L is the largest number in the array
- Space complexity: O(n)

## #2 Solution

- Approach: Brute force by iterative
- Time complexity: O(L^n), where L is the largest number in the array
- Space complexity: O(L^n)

## #3 Solution

- Approach: Move from right to left
- Time complexity: O(n^2)
- Space complexity: O(n)

## #4 Solution

- Approach: Greedy
- Time complexity: O(n)
- Space complexity: O(1)
